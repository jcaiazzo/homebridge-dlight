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
var device_attestation_revocation_exports = {};
__export(device_attestation_revocation_exports, {
  RevocationTypeEnum: () => RevocationTypeEnum
});
module.exports = __toCommonJS(device_attestation_revocation_exports);
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
var RevocationTypeEnum = /* @__PURE__ */ ((RevocationTypeEnum2) => {
  RevocationTypeEnum2[RevocationTypeEnum2["Crl"] = 1] = "Crl";
  return RevocationTypeEnum2;
})(RevocationTypeEnum || {});
//# sourceMappingURL=device-attestation-revocation.js.map
