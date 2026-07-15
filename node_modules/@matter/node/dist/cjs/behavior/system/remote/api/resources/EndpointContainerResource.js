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
var EndpointContainerResource_exports = {};
__export(EndpointContainerResource_exports, {
  EndpointContainerResource: () => EndpointContainerResource
});
module.exports = __toCommonJS(EndpointContainerResource_exports);
var import_ApiResource = require("../ApiResource.js");
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
class EndpointContainerResource extends import_ApiResource.ApiResource {
  id;
  #list;
  #find;
  supervisor;
  valueKind = "index";
  constructor(parent, id, list, find) {
    super(parent);
    this.id = id;
    this.#list = list;
    this.#find = find;
  }
  get dataModelPath() {
    return this.parent.dataModelPath.at(this.id);
  }
  get value() {
    return this.#list();
  }
  async childFor(id) {
    return this.#find(id);
  }
}
//# sourceMappingURL=EndpointContainerResource.js.map
