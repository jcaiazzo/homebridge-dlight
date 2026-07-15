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
var device_software_compliance_exports = {};
__export(device_software_compliance_exports, {
  SoftwareVersionCertificationStatusEnum: () => SoftwareVersionCertificationStatusEnum
});
module.exports = __toCommonJS(device_software_compliance_exports);
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
var SoftwareVersionCertificationStatusEnum = /* @__PURE__ */ ((SoftwareVersionCertificationStatusEnum2) => {
  SoftwareVersionCertificationStatusEnum2[SoftwareVersionCertificationStatusEnum2["DevTest"] = 0] = "DevTest";
  SoftwareVersionCertificationStatusEnum2[SoftwareVersionCertificationStatusEnum2["Provisional"] = 1] = "Provisional";
  SoftwareVersionCertificationStatusEnum2[SoftwareVersionCertificationStatusEnum2["Certified"] = 2] = "Certified";
  SoftwareVersionCertificationStatusEnum2[SoftwareVersionCertificationStatusEnum2["Revoked"] = 3] = "Revoked";
  return SoftwareVersionCertificationStatusEnum2;
})(SoftwareVersionCertificationStatusEnum || {});
//# sourceMappingURL=device-software-compliance.js.map
