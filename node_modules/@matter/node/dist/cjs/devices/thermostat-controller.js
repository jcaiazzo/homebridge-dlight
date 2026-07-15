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
var thermostat_controller_exports = {};
__export(thermostat_controller_exports, {
  ThermostatControllerDevice: () => ThermostatControllerDevice,
  ThermostatControllerDeviceDefinition: () => ThermostatControllerDeviceDefinition,
  ThermostatControllerRequirements: () => ThermostatControllerRequirements
});
module.exports = __toCommonJS(thermostat_controller_exports);
var import_ThermostatBehavior = require("../behaviors/thermostat/ThermostatBehavior.js");
var import_IdentifyBehavior = require("../behaviors/identify/IdentifyBehavior.js");
var import_GroupsBehavior = require("../behaviors/groups/GroupsBehavior.js");
var import_ScenesManagementBehavior = require("../behaviors/scenes-management/ScenesManagementBehavior.js");
var import_MutableEndpoint = require("../endpoint/type/MutableEndpoint.js");
var import_SupportedBehaviors = require("../endpoint/properties/SupportedBehaviors.js");
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
var ThermostatControllerRequirements;
((ThermostatControllerRequirements2) => {
  ThermostatControllerRequirements2.ThermostatBehavior = import_ThermostatBehavior.ThermostatBehavior;
  ThermostatControllerRequirements2.IdentifyBehavior = import_IdentifyBehavior.IdentifyBehavior;
  ThermostatControllerRequirements2.GroupsBehavior = import_GroupsBehavior.GroupsBehavior;
  ThermostatControllerRequirements2.ScenesManagementBehavior = import_ScenesManagementBehavior.ScenesManagementBehavior;
  ThermostatControllerRequirements2.client = {
    mandatory: { Thermostat: ThermostatControllerRequirements2.ThermostatBehavior },
    optional: { Identify: ThermostatControllerRequirements2.IdentifyBehavior, Groups: ThermostatControllerRequirements2.GroupsBehavior, ScenesManagement: ThermostatControllerRequirements2.ScenesManagementBehavior }
  };
})(ThermostatControllerRequirements || (ThermostatControllerRequirements = {}));
const ThermostatControllerDeviceDefinition = (0, import_MutableEndpoint.MutableEndpoint)({
  name: "ThermostatController",
  deviceType: 778,
  deviceRevision: 1,
  requirements: ThermostatControllerRequirements,
  behaviors: (0, import_SupportedBehaviors.SupportedBehaviors)()
});
Object.freeze(ThermostatControllerDeviceDefinition);
const ThermostatControllerDevice = ThermostatControllerDeviceDefinition;
//# sourceMappingURL=thermostat-controller.js.map
