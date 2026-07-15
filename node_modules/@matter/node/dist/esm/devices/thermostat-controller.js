/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ThermostatBehavior as BaseThermostatBehavior } from "../behaviors/thermostat/ThermostatBehavior.js";
import { IdentifyBehavior as BaseIdentifyBehavior } from "../behaviors/identify/IdentifyBehavior.js";
import { GroupsBehavior as BaseGroupsBehavior } from "../behaviors/groups/GroupsBehavior.js";
import {
  ScenesManagementBehavior as BaseScenesManagementBehavior
} from "../behaviors/scenes-management/ScenesManagementBehavior.js";
import { MutableEndpoint } from "../endpoint/type/MutableEndpoint.js";
import { SupportedBehaviors } from "../endpoint/properties/SupportedBehaviors.js";
var ThermostatControllerRequirements;
((ThermostatControllerRequirements2) => {
  ThermostatControllerRequirements2.ThermostatBehavior = BaseThermostatBehavior;
  ThermostatControllerRequirements2.IdentifyBehavior = BaseIdentifyBehavior;
  ThermostatControllerRequirements2.GroupsBehavior = BaseGroupsBehavior;
  ThermostatControllerRequirements2.ScenesManagementBehavior = BaseScenesManagementBehavior;
  ThermostatControllerRequirements2.client = {
    mandatory: { Thermostat: ThermostatControllerRequirements2.ThermostatBehavior },
    optional: { Identify: ThermostatControllerRequirements2.IdentifyBehavior, Groups: ThermostatControllerRequirements2.GroupsBehavior, ScenesManagement: ThermostatControllerRequirements2.ScenesManagementBehavior }
  };
})(ThermostatControllerRequirements || (ThermostatControllerRequirements = {}));
const ThermostatControllerDeviceDefinition = MutableEndpoint({
  name: "ThermostatController",
  deviceType: 778,
  deviceRevision: 1,
  requirements: ThermostatControllerRequirements,
  behaviors: SupportedBehaviors()
});
Object.freeze(ThermostatControllerDeviceDefinition);
const ThermostatControllerDevice = ThermostatControllerDeviceDefinition;
export {
  ThermostatControllerDevice,
  ThermostatControllerDeviceDefinition,
  ThermostatControllerRequirements
};
//# sourceMappingURL=thermostat-controller.js.map
