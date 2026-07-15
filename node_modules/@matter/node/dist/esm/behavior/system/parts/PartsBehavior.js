/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Behavior } from "../../Behavior.js";
class PartsBehavior extends Behavior {
  static id = "parts";
  add(child) {
    this.endpoint.parts.add(child);
  }
  delete(child) {
    return this.endpoint.parts.delete(child);
  }
  clear() {
    this.endpoint.parts.clear();
  }
  has(child) {
    return this.endpoint.parts.has(child);
  }
  indexOf(child) {
    return this.endpoint.parts.indexOf(child);
  }
  *[Symbol.iterator]() {
    for (const part of this.endpoint.parts) {
      yield part.agentFor(this.context);
    }
  }
}
export {
  PartsBehavior
};
//# sourceMappingURL=PartsBehavior.js.map
