/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Agent } from "#endpoint/Agent.js";
import type { Endpoint } from "#endpoint/Endpoint.js";
import type { EndpointType } from "#endpoint/type/EndpointType.js";
import type { ActionContext } from "../ActionContext.js";
/**
 * Internal helper for managing agents associated with a session.
 */
export interface ContextAgents {
    [Symbol.toStringTag]: "ContextAgents";
    agentFor<const T extends EndpointType>(endpoint: Endpoint<T>): Agent.Instance<T>;
}
export declare function ContextAgents(context: ActionContext): ContextAgents;
//# sourceMappingURL=ContextAgents.d.ts.map