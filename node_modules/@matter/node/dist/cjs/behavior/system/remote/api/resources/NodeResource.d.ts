/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Agent } from "#endpoint/Agent.js";
import { Node } from "#node/Node.js";
import { ApiResource } from "../ApiResource.js";
import { EndpointResource } from "./EndpointResource.js";
/**
 * Specialization for {@link EndpointResource} that adds "endpoints" collection.
 */
export declare class NodeResource extends EndpointResource {
    constructor(agent: Agent, parent: undefined | ApiResource);
    get valueKind(): ApiResource.Kind;
    childFor(name: string): Promise<ApiResource | void>;
    get node(): Node;
    get isSelfReferential(): boolean;
}
//# sourceMappingURL=NodeResource.d.ts.map