import {
  AccessoryPlugin,
  Logging,
  AccessoryConfig,
  API,
  Service,
  Characteristic,
  CharacteristicValue,
} from "homebridge";
import * as Net from "net";
import mdns from "multicast-dns";

const DISCOVERY_TIMEOUT_MS = 10000;
const NOT_READY_REASON = "Not ready.";
const TIMEOUT_REASON = "Timed out.";
const SUCCESS_STATUS = "SUCCESS";
const PORT = 3333;
const DLIGHT_MIN_TEMP = 2600;
const DLIGHT_MAX_TEMP = 6000;
const DLIGHT_TEMP_DELTA = DLIGHT_MAX_TEMP - DLIGHT_MIN_TEMP;
const DLIGHT_STEP_SIZE = 100;
const HOMEBRIDGE_MIN_TEMP = 140;
const HOMEBRIDGE_MAX_TEMP = 500;
const HOMEBRIDGE_TEMP_DELTA = HOMEBRIDGE_MAX_TEMP - HOMEBRIDGE_MIN_TEMP;

enum CommandType {
  EXECUTE = "EXECUTE",
  QUERY_DEVICE_STATES = "QUERY_DEVICE_STATES",
}

interface DeviceState {
  on: boolean;
  brightness: number;
  colorTemperature: number;
}

export default class DLight implements AccessoryPlugin {
  private readonly lightbulbService: Service;
  private readonly deviceId: string;
  private readonly deviceIp: string;
  private readonly logger: Logging;

  private readonly onCharacteristic: Characteristic;
  private readonly brightnessCharacteristic: Characteristic;
  private readonly colorTemperatureCharacteristic: Characteristic;

  private ip: string | undefined;
  private ready: boolean = false;

  private deviceState: DeviceState = {
    on: false,
    brightness: 0,
    colorTemperature: 500,
  };

  constructor(log: Logging, config: AccessoryConfig, api: API) {
    this.deviceIp = config.device_ip;
    this.deviceId = config.device_id;
    this.logger = log;

    this.logger.info("Loading DLight...");

    this.lightbulbService = new api.hap.Service.Lightbulb("DLight");
    this.onCharacteristic = this.lightbulbService.getCharacteristic(
      api.hap.Characteristic.On
    );
    this.brightnessCharacteristic = this.lightbulbService.getCharacteristic(
      api.hap.Characteristic.Brightness
    );
    this.colorTemperatureCharacteristic =
      this.lightbulbService.getCharacteristic(
        api.hap.Characteristic.ColorTemperature
      );

    // On/Off
    this.onCharacteristic.onGet(() => {
      this.remoteGet()
        .then((state) => this.onCharacteristic.updateValue(state.on))
        .catch((err) => this.logger.error(`Unable to get ON state: ${err}`));
      return this.deviceState.on;
    });
    this.onCharacteristic.onSet(this.setOn.bind(this));

    // Brightness
    this.brightnessCharacteristic.onGet(() => {
      this.remoteGet()
        .then((state) => this.brightnessCharacteristic.updateValue(state.brightness))
        .catch((err) => this.logger.error(`Unable to get brightness: ${err}`));
      return this.deviceState.brightness;
    });
    this.brightnessCharacteristic.onSet(this.setBrightness.bind(this));

    // Color Temperature
    this.colorTemperatureCharacteristic.onGet(() => {
      this.remoteGet()
        .then((state) => this.colorTemperatureCharacteristic.updateValue(state.colorTemperature))
        .catch((err) => this.logger.error(`Unable to get color temperature: ${err}`));
      return this.deviceState.colorTemperature;
    });
    this.colorTemperatureCharacteristic.onSet(this.setColorTemperature.bind(this));

    this.initialize().catch((error) => {
      this.logger.error(`Failed to initialize: ${error?.message || error}`);
    });
  }

  getServices(): Service[] {
    return [this.lightbulbService];
  }

  async initialize() {
    this.logger.info("Initializing DLight.");
    if (this.deviceIp) {
      this.ip = this.deviceIp;
    } else {
      this.ip = await this.getIp();
    }
    this.ready = true;
    this.logger.info("Finished initializing DLight.");
  }

  private getIp(): Promise<string> {
    const dnsName = `GLAMP_${this.deviceId}.local`;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        mdnsClient.destroy();
        reject(`${TIMEOUT_REASON}: getIp()`);
      }, DISCOVERY_TIMEOUT_MS);
      const mdnsClient = mdns();

      mdnsClient.on("response", (response) => {
        const answer = response.answers.find(
          (answer: any) =>
            answer.name === dnsName && answer.type === "A" && answer.data
        );

        if (answer) {
          clearTimeout(timeout);
          mdnsClient.destroy();
          resolve(answer.data);
        }
      });

      this.logger.info(`Looking for: ${dnsName}`);
      mdnsClient.query({
        questions: [
          {
            name: dnsName,
            type: "A",
          },
        ],
      });
    });
  }

  private async setOn(value: CharacteristicValue): Promise<void> {
    const response = await this.apiCall(CommandType.EXECUTE, [
      { on: value as boolean },
    ]);
    this.deviceState.on = response.on;
  }

  private async setBrightness(value: CharacteristicValue): Promise<void> {
    const response = await this.apiCall(CommandType.EXECUTE, [
      { brightness: value as number },
    ]);
    this.deviceState.brightness = response.brightness;
  }

  private async setColorTemperature(value: CharacteristicValue): Promise<void> {
    const quantizedTemp = this.hbTempToDlTemp(value as number);

    this.logger.debug(`Setting temperature: ${value} -> ${quantizedTemp}`);

    const response = await this.apiCall(CommandType.EXECUTE, [
      { color: { temperature: quantizedTemp } },
    ]);

    this.deviceState.colorTemperature = this.dlTempToHbTemp(
      response.color.temperature
    );
  }

  private async remoteGet(): Promise<DeviceState> {
    const response = await this.apiCall(CommandType.QUERY_DEVICE_STATES);
    this.deviceState.on = response.states.on;
    this.deviceState.brightness = response.states.brightness;
    this.deviceState.colorTemperature = this.dlTempToHbTemp(
      response.states.color.temperature
    );
    return this.deviceState;
  }

  private apiCall(commandType: CommandType, commands?: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.ready) return reject(NOT_READY_REASON);

      const socket = new Net.Socket();

      const timeout = setTimeout(() => {
        socket.end();
        reject(
          `${TIMEOUT_REASON}: ${JSON.stringify({ commandType, commands })}`
        );
      }, DISCOVERY_TIMEOUT_MS);

      socket.on("error", (err) => {
        clearTimeout(timeout);
        reject(err);
      });
      socket.on("data", (buffer) => {
        clearTimeout(timeout);
        socket.end();

        try {
          const response = JSON.parse(buffer.subarray(4).toString());

          if (response.status === SUCCESS_STATUS) {
            resolve(response);
          } else {
            reject(response.status);
          }
        } catch (err) {
          reject(new Error(`Failed to parse response: ${err}`));
        }
      });
      socket.on("ready", () => {
        const body = {
          commandId: "commandId",
          deviceId: this.deviceId,
          commandType,
        } as any;

        if (commands) {
          body.commands = commands;
        }

        socket.write(JSON.stringify(body));
      });
      socket.connect({ port: PORT, host: this.ip });
    });
  }

  private hbTempToDlTemp(hbTemp: number) {
    const normalizedTemp =
      ((hbTemp - HOMEBRIDGE_MIN_TEMP) * -1 + HOMEBRIDGE_TEMP_DELTA) *
        (DLIGHT_TEMP_DELTA / HOMEBRIDGE_TEMP_DELTA) +
      DLIGHT_MIN_TEMP;

    const quantizedTemp =
      Math.round(normalizedTemp / DLIGHT_STEP_SIZE) * DLIGHT_STEP_SIZE;

    this.logger.debug(`Converting hb to dl ${hbTemp} -> ${quantizedTemp}`);

    return quantizedTemp;
  }

  private dlTempToHbTemp(dlTemp: number) {
    const normalizedTemp =
      ((dlTemp - DLIGHT_MIN_TEMP) * -1 + DLIGHT_TEMP_DELTA) *
        (HOMEBRIDGE_TEMP_DELTA / DLIGHT_TEMP_DELTA) +
      HOMEBRIDGE_MIN_TEMP;

    this.logger.debug(`Converting dl to hb ${dlTemp} -> ${normalizedTemp}`);

    return normalizedTemp;
  }
}
