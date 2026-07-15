import { AccessoryPlugin, Logging, AccessoryConfig, API, Service } from "homebridge";
export default class DLight implements AccessoryPlugin {
    private readonly lightbulbService;
    private readonly deviceId;
    private readonly deviceIp;
    private readonly logger;
    private readonly onCharacteristic;
    private readonly brightnessCharacteristic;
    private readonly colorTemperatureCharacteristic;
    private ip;
    private ready;
    private deviceState;
    constructor(log: Logging, config: AccessoryConfig, api: API);
    getServices(): Service[];
    initialize(): Promise<void>;
    private getIp;
    private setOn;
    private setBrightness;
    private setColorTemperature;
    private remoteGet;
    private apiCall;
    private hbTempToDlTemp;
    private dlTempToHbTemp;
}
//# sourceMappingURL=dlight.d.ts.map