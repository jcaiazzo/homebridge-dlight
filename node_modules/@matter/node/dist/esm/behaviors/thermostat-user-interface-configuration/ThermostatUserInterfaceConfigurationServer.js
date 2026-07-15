/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { UnitLocalizationServer } from "#behaviors/unit-localization";
import { ThermostatUserInterfaceConfiguration } from "@matter/types/clusters/thermostat-user-interface-configuration";
import { UnitLocalization } from "@matter/types/clusters/unit-localization";
import { ThermostatUserInterfaceConfigurationBehavior } from "./ThermostatUserInterfaceConfigurationBehavior.js";
class ThermostatUserInterfaceConfigurationServer extends ThermostatUserInterfaceConfigurationBehavior {
  initialize() {
    if (this.state.temperatureDisplayMode === void 0) {
      let temperatureDisplayMode;
      if (this.agent.has(UnitLocalizationServer)) {
        const unitLocalization = this.agent.get(UnitLocalizationServer);
        if (unitLocalization.state.temperatureUnit === UnitLocalization.TempUnit.Fahrenheit) {
          temperatureDisplayMode = ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.Fahrenheit;
        }
      }
      this.state.temperatureDisplayMode = temperatureDisplayMode ?? ThermostatUserInterfaceConfiguration.TemperatureDisplayMode.Celsius;
    }
    this.state.keypadLockout = ThermostatUserInterfaceConfiguration.KeypadLockout.NoLockout;
  }
}
export {
  ThermostatUserInterfaceConfigurationServer
};
//# sourceMappingURL=ThermostatUserInterfaceConfigurationServer.js.map
