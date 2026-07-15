/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Discovery } from "./Discovery.js";
import { DiscoveryError } from "./DiscoveryError.js";
class InstanceDiscovery extends Discovery {
  #result;
  constructor(owner, options) {
    super(owner, options);
  }
  onDiscovered(node) {
    this.#result = node;
    this.stop();
  }
  onComplete() {
    if (this.#result === void 0) {
      throw new DiscoveryError(`${this} failed: Node not found`);
    }
    return this.#result;
  }
}
export {
  InstanceDiscovery
};
//# sourceMappingURL=InstanceDiscovery.js.map
