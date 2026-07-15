/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiResource } from "../ApiResource.js";
class EndpointContainerResource extends ApiResource {
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
export {
  EndpointContainerResource
};
//# sourceMappingURL=EndpointContainerResource.js.map
