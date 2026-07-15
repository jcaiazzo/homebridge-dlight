/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Behavior } from "#behavior/Behavior.js";
import { BehaviorBacking } from "#behavior/internal/BehaviorBacking.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import type { ClientNode } from "#node/ClientNode.js";
import { ClientStructure } from "./ClientStructure.js";
export declare class ClientEndpointInitializer extends EndpointInitializer {
    #private;
    constructor(node: ClientNode);
    eraseDescendant(endpoint: Endpoint): Promise<void>;
    deactivateDescendant(_endpoint: Endpoint): Promise<void>;
    createBacking(endpoint: Endpoint, type: Behavior.Type): BehaviorBacking;
    get structure(): ClientStructure;
}
//# sourceMappingURL=ClientEndpointInitializer.d.ts.map