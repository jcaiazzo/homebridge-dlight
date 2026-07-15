"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var api_exports = {};
module.exports = __toCommonJS(api_exports);
__reExport(api_exports, require("./Api.js"), module.exports);
__reExport(api_exports, require("./ApiResource.js"), module.exports);
__reExport(api_exports, require("./Envelope.js"), module.exports);
__reExport(api_exports, require("./LocalResponse.js"), module.exports);
__reExport(api_exports, require("./RemoteRequest.js"), module.exports);
__reExport(api_exports, require("./RemoteResponse.js"), module.exports);
__reExport(api_exports, require("./resources/index.js"), module.exports);
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=index.js.map
