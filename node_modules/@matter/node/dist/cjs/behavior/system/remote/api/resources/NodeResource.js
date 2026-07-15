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
var NodeResource_exports = {};
__export(NodeResource_exports, {
  NodeResource: () => NodeResource
});
module.exports = __toCommonJS(NodeResource_exports);
var import_EndpointContainerResource = require("./EndpointContainerResource.js");
var import_EndpointResource = require("./EndpointResource.js");
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
class NodeResource extends import_EndpointResource.EndpointResource {
  constructor(agent, parent) {
    super(agent, parent);
  }
  get valueKind() {
    return "node";
  }
  async childFor(name) {
    const {
      node: { endpoints }
    } = this;
    if (!this.isSelfReferential) {
      if (name.match(/^\d+$/)) {
        return (await this.childFor("endpoints"))?.childFor(name);
      }
    }
    if (name === "endpoints") {
      return new import_EndpointContainerResource.EndpointContainerResource(
        this,
        "endpoints",
        () => endpoints.map((endpoint) => endpoint.number.toString()),
        (name2) => {
          if (!name2.match(/^\d+$/)) {
            return;
          }
          const number = Number.parseInt(name2);
          if (Number.isNaN(number) || !endpoints.has(number)) {
            return;
          }
          const endpoint = endpoints.for(number);
          return new import_EndpointResource.EndpointResource(endpoint.agentFor(this.agent.context), this);
        }
      );
    }
    return super.childFor(name);
  }
  get node() {
    return this.agent.endpoint;
  }
  get isSelfReferential() {
    return this.parent instanceof NodeResource && this.parent.node === this.node;
  }
}
//# sourceMappingURL=NodeResource.js.map
