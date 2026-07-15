"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ThermostatUserInterfaceConfigurationServer_exports = {};
__export(ThermostatUserInterfaceConfigurationServer_exports, {
  ThermostatUserInterfaceConfigurationServer: () => ThermostatUserInterfaceConfigurationServer
});
module.exports = __toCommonJS(ThermostatUserInterfaceConfigurationServer_exports);
var import_unit_localization = require("#behaviors/unit-localization");
var import_thermostat_user_interface_configuration = require("@matter/types/clusters/thermostat-user-interface-configuration");
var import_unit_localization2 = require("@matter/types/clusters/unit-localization");
var import_ThermostatUserInterfaceConfigurationBehavior = require("./ThermostatUserInterfaceConfigurationBehavior.js");
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
class ThermostatUserInterfaceConfigurationServer extends import_ThermostatUserInterfaceConfigurationBehavior.ThermostatUserInterfaceConfigurationBehavior {
  initialize() {
    if (this.state.temperatureDisplayMode === void 0) {
      let temperatureDisplayMode;
      if (this.agent.has(import_unit_localization.UnitLocalizationServer)) {
        const unitLocalization = this.agent.get(import_unit_localization.UnitLocalizationServer);
        if (unitLocalization.state.temperatureUnit === import_unit_localization2.UnitLocalization.TempUnit.Fahrenheit) {
          temperatureDisplayMode = import_thermostat_user_interface_configuration.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.Fahrenheit;
        }
      }
      this.state.temperatureDisplayMode = temperatureDisplayMode ?? import_thermostat_user_interface_configuration.ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.Celsius;
    }
    this.state.keypadLockout = import_thermostat_user_interface_configuration.ThermostatUserInterfaceConfiguration.KeypadLockout.NoLockout;
  }
}
//# sourceMappingURL=ThermostatUserInterfaceConfigurationServer.js.map
