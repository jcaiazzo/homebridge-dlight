import { API } from "homebridge";

import { PLUGIN_NAME, ACCESSORY_NAME } from "./settings";
import DLight from "./dlight";

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerAccessory(PLUGIN_NAME, ACCESSORY_NAME, DLight);
};
