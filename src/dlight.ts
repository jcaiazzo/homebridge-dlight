import {
  AccessoryPlugin,
  Logging,
  AccessoryConfig,
  API,
  Service,
  CharacteristicEventTypes,
  Characteristic,
  CharacteristicValue,
} from "homebridge";
import * as Net from "net";
const mdns = require("multicast-dns");

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

enum DeviceStateField {
  ON = "on",
  BRIGHTNESS = "brightness",
  COLOR_TEMPERATURE = "colorTemperature",
}

interface DeviceState {
  on: boolean;
  brightness: number;
  colorTemperature: number;
}

export default class DLight implements AccessoryPlugin {
  private readonly lightbulbService: Service;
  private readonly deviceId: string;
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

    this.registerGetter(this.onCharacteristic, DeviceStateField.ON);
    this.registerSetter(
      this.onCharacteristic,
      this.setOn.bind(this),
      DeviceStateField.ON
    );

    this.registerGetter(
      this.brightnessCharacteristic,
      DeviceStateField.BRIGHTNESS
    );
    this.registerSetter(
      this.brightnessCharacteristic,
      this.setBrightness.bind(this),
      DeviceStateField.BRIGHTNESS
    );

    this.registerGetter(
      this.colorTemperatureCharacteristic,
      DeviceStateField.COLOR_TEMPERATURE
    );
    this.registerSetter(
      this.colorTemperatureCharacteristic,
      this.setColorTemperature.bind(this),
      DeviceStateField.COLOR_TEMPERATURE
    );

    this.initialize().catch((error) => {
      error = error || new Error("Failed to initialize.");
      this.logger.error(error);
    });
  }

  getServices(): Service[] {
    return [this.lightbulbService];
  }

  async initialize() {
    this.logger.info("Initializing DLight.");
    this.ip = await this.getIp();
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
          (answer) =>
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

  private registerGetter(
    characteristic: Characteristic,
    fieldName: DeviceStateField
  ) {
    characteristic.on(CharacteristicEventTypes.GET, (cb) => {
      this.remoteGet()
        .then((deviceState) =>
          characteristic.updateValue(deviceState[fieldName])
        )
        .catch((err) => {
          err = err || new Error(`Unable to get: ${fieldName}`);
          this.logger.error(err);
        });
      cb(undefined, this.deviceState[fieldName]);
    });
  }

  private registerSetter(
    characteristic: Characteristic,
    setter: (value: CharacteristicValue) => Promise<void>,
    fieldName: DeviceStateField
  ) {
    characteristic.on(CharacteristicEventTypes.SET, (value, cb) => {
      setter(value)
        .then(() => cb())
        .catch((reason) => {
          reason = reason || new Error(`Unable to set: ${fieldName}`);
          this.logger.error(reason);
          cb(reason);
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

      socket.on("error", reject);
      socket.on("data", (buffer) => {
        clearTimeout(timeout);
        socket.end();

        const response = JSON.parse(buffer.subarray(4).toString());

        if (response.status === SUCCESS_STATUS) {
          resolve(response);
        } else {
          reject(response.status);
        }
      });
      socket.on("ready", () => {
        const body = {
          comandId: "commandId",
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
