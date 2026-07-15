/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { EndpointContainerResource } from "./EndpointContainerResource.js";
import { EndpointResource } from "./EndpointResource.js";
class NodeResource extends EndpointResource {
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
      return new EndpointContainerResource(
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
          return new EndpointResource(endpoint.agentFor(this.agent.context), this);
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
export {
  NodeResource
};
//# sourceMappingURL=NodeResource.js.map
