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
var ServerNodeResource_exports = {};
__export(ServerNodeResource_exports, {
  ServerNodeResource: () => ServerNodeResource
});
module.exports = __toCommonJS(ServerNodeResource_exports);
var import_ChangesResource = require("./ChangesResource.js");
var import_EndpointContainerResource = require("./EndpointContainerResource.js");
var import_NodeResource = require("./NodeResource.js");
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
class ServerNodeResource extends import_NodeResource.NodeResource {
  /**
   * For the root node, we provide a "flat" namespace that is rooted at Node IDs, in addition to the normal
   * endpoint namespace.  This could conceivably lead to conflict but we also provide typed subcollections that
   * cannot have conflicts.
   *
   * We disable the flat namespace if the node is referenced as a child of itself so conflicts cannot occur.
   */
  async childFor(name) {
    if (!this.isSelfReferential) {
      if (name === this.id || name === "host") {
        return this;
      }
      const peer = this.node.peers.get(name);
      if (peer) {
        return new import_NodeResource.NodeResource(peer.agentFor(this.agent.context), this);
      }
    }
    switch (name) {
      // Explicit collection of peers
      case "peers":
        return new import_EndpointContainerResource.EndpointContainerResource(
          this,
          "peers",
          () => this.node.peers.map((peer) => peer.id),
          (id) => {
            const peer = this.node.peers.get(id);
            if (peer) {
              return new import_NodeResource.NodeResource(peer.agentFor(this.agent.context), this);
            }
          }
        );
      // Subscription target
      case "changes":
        return new import_ChangesResource.ChangesResource(this);
    }
    return super.childFor(name);
  }
  get node() {
    return this.agent.endpoint;
  }
}
//# sourceMappingURL=ServerNodeResource.js.map
