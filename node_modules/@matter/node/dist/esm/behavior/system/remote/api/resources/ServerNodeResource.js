/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangesResource } from "./ChangesResource.js";
import { EndpointContainerResource } from "./EndpointContainerResource.js";
import { NodeResource } from "./NodeResource.js";
class ServerNodeResource extends NodeResource {
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
        return new NodeResource(peer.agentFor(this.agent.context), this);
      }
    }
    switch (name) {
      // Explicit collection of peers
      case "peers":
        return new EndpointContainerResource(
          this,
          "peers",
          () => this.node.peers.map((peer) => peer.id),
          (id) => {
            const peer = this.node.peers.get(id);
            if (peer) {
              return new NodeResource(peer.agentFor(this.agent.context), this);
            }
          }
        );
      // Subscription target
      case "changes":
        return new ChangesResource(this);
    }
    return super.childFor(name);
  }
  get node() {
    return this.agent.endpoint;
  }
}
export {
  ServerNodeResource
};
//# sourceMappingURL=ServerNodeResource.js.map
