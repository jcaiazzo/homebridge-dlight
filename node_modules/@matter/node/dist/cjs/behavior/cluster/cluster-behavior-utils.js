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
var cluster_behavior_utils_exports = {};
__export(cluster_behavior_utils_exports, {
  introspectionInstanceOf: () => introspectionInstanceOf,
  isClientBehavior: () => isClientBehavior,
  markClientBehavior: () => markClientBehavior
});
module.exports = __toCommonJS(cluster_behavior_utils_exports);
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
function introspectionInstanceOf(type) {
  return new type();
}
const isClient = /* @__PURE__ */ Symbol("is-client");
function markClientBehavior(type) {
  type[isClient] = true;
}
function isClientBehavior(type) {
  return type[isClient] && Object.hasOwn(type, isClient);
}
//# sourceMappingURL=cluster-behavior-utils.js.map
