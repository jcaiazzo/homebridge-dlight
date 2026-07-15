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
var general_exports = {};
__export(general_exports, {
  GeneralStatusCode: () => GeneralStatusCode
});
module.exports = __toCommonJS(general_exports);
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
var GeneralStatusCode = /* @__PURE__ */ ((GeneralStatusCode2) => {
  GeneralStatusCode2[GeneralStatusCode2["Success"] = 0] = "Success";
  GeneralStatusCode2[GeneralStatusCode2["Failure"] = 1] = "Failure";
  GeneralStatusCode2[GeneralStatusCode2["BadPrecondition"] = 2] = "BadPrecondition";
  GeneralStatusCode2[GeneralStatusCode2["OutOfRange"] = 3] = "OutOfRange";
  GeneralStatusCode2[GeneralStatusCode2["BadRequest"] = 4] = "BadRequest";
  GeneralStatusCode2[GeneralStatusCode2["Unsupported"] = 5] = "Unsupported";
  GeneralStatusCode2[GeneralStatusCode2["Unexpected"] = 6] = "Unexpected";
  GeneralStatusCode2[GeneralStatusCode2["ResourceExhausted"] = 7] = "ResourceExhausted";
  GeneralStatusCode2[GeneralStatusCode2["Busy"] = 8] = "Busy";
  GeneralStatusCode2[GeneralStatusCode2["Timeout"] = 9] = "Timeout";
  GeneralStatusCode2[GeneralStatusCode2["Continue"] = 10] = "Continue";
  GeneralStatusCode2[GeneralStatusCode2["Aborted"] = 11] = "Aborted";
  GeneralStatusCode2[GeneralStatusCode2["InvalidArgument"] = 12] = "InvalidArgument";
  GeneralStatusCode2[GeneralStatusCode2["NotFound"] = 13] = "NotFound";
  GeneralStatusCode2[GeneralStatusCode2["AlreadyExists"] = 14] = "AlreadyExists";
  GeneralStatusCode2[GeneralStatusCode2["PermissionDenied"] = 15] = "PermissionDenied";
  GeneralStatusCode2[GeneralStatusCode2["DataLoss"] = 16] = "DataLoss";
  GeneralStatusCode2[GeneralStatusCode2["MessageTooLarge"] = 17] = "MessageTooLarge";
  return GeneralStatusCode2;
})(GeneralStatusCode || {});
//# sourceMappingURL=general.js.map
