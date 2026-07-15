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
var ThreeLevelAuto_exports = {};
__export(ThreeLevelAuto_exports, {
  ThreeLevelAuto: () => ThreeLevelAuto
});
module.exports = __toCommonJS(ThreeLevelAuto_exports);
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
var ThreeLevelAuto = /* @__PURE__ */ ((ThreeLevelAuto2) => {
  ThreeLevelAuto2[ThreeLevelAuto2["Auto"] = 0] = "Auto";
  ThreeLevelAuto2[ThreeLevelAuto2["Low"] = 1] = "Low";
  ThreeLevelAuto2[ThreeLevelAuto2["Medium"] = 2] = "Medium";
  ThreeLevelAuto2[ThreeLevelAuto2["High"] = 3] = "High";
  return ThreeLevelAuto2;
})(ThreeLevelAuto || {});
//# sourceMappingURL=ThreeLevelAuto.js.map
