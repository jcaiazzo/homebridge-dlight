/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Behavior } from "#behavior/Behavior.js";
import { RootSupervisor } from "#behavior/supervision/RootSupervisor.js";
import { ApiResource } from "../ApiResource.js";
import { PropertyResource } from "./PropertyResource.js";
/**
 * API item for behaviors.
 */
export declare class BehaviorResource extends PropertyResource {
    #private;
    get valueKind(): ApiResource.Kind;
    constructor(behavior: Behavior, parent: ApiResource);
    get value(): {};
    write(): void;
    childFor(id: string): Promise<void | ApiResource | PropertyResource>;
    get rootSupervisor(): RootSupervisor;
}
//# sourceMappingURL=BehaviorResource.d.ts.map