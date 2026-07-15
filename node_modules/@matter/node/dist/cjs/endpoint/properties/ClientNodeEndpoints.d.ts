/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointType } from "#endpoint/type/EndpointType.js";
import { Endpoints } from "./Endpoints.js";
/**
 * Access to all endpoints on a client node, including the root endpoint.
 */
export declare class ClientNodeEndpoints extends Endpoints {
    /**
     * For nodes where the behavior/cluster structure can not be initialized automatically (e.g. by a subscription) or
     * when the subscription data misses special clusters, you can use this method to enable a cluster on a specific
     * endpoint.
     * The method adds the endpoint, if not existing.
     */
    require(endpointId: number, type?: Partial<EndpointType>): Endpoint<EndpointType.Empty>;
}
//# sourceMappingURL=ClientNodeEndpoints.d.ts.map