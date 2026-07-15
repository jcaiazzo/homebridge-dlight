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
var Currency_exports = {};
__export(Currency_exports, {
  TlvCurrency: () => TlvCurrency
});
module.exports = __toCommonJS(Currency_exports);
var import_TlvObject = require("../tlv/TlvObject.js");
var import_TlvNumber = require("../tlv/TlvNumber.js");
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
const TlvCurrency = (0, import_TlvObject.TlvObject)({
  currency: (0, import_TlvObject.TlvField)(0, import_TlvNumber.TlvUInt16.bound({ max: 999 })),
  decimalPoints: (0, import_TlvObject.TlvField)(1, import_TlvNumber.TlvUInt8)
});
//# sourceMappingURL=Currency.js.map
