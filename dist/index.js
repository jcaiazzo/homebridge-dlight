import { PLUGIN_NAME, ACCESSORY_NAME } from "./settings.js";
import DLight from "./dlight.js";
/**
 * This method registers the platform with Homebridge
 */
export default (api) => {
    api.registerAccessory(PLUGIN_NAME, ACCESSORY_NAME, DLight);
};
//# sourceMappingURL=index.js.map