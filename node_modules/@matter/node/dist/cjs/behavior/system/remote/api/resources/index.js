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
var resources_exports = {};
module.exports = __toCommonJS(resources_exports);
__reExport(resources_exports, require("./BehaviorResource.js"), module.exports);
__reExport(resources_exports, require("./CommandResource.js"), module.exports);
__reExport(resources_exports, require("./EndpointContainerResource.js"), module.exports);
__reExport(resources_exports, require("./EndpointResource.js"), module.exports);
__reExport(resources_exports, require("./NodeResource.js"), module.exports);
__reExport(resources_exports, require("./PropertyResource.js"), module.exports);
__reExport(resources_exports, require("./ServerNodeResource.js"), module.exports);
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=index.js.map
