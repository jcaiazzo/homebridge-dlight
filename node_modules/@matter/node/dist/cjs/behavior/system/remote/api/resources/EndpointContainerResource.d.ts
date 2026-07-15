/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ApiResource } from "../ApiResource.js";
import type { EndpointResource } from "./EndpointResource.js";
/**
 * API item for collections of endpoints.
 */
export declare class EndpointContainerResource extends ApiResource {
    #private;
    readonly id: string;
    readonly parent: EndpointResource;
    supervisor: undefined;
    readonly valueKind: ApiResource.Kind;
    constructor(parent: EndpointResource, id: string, list: () => string[], find: (path: string) => ApiResource | undefined);
    get dataModelPath(): import("@matter/model").DataModelPath;
    get value(): string[];
    childFor(id: string): Promise<ApiResource | undefined>;
}
//# sourceMappingURL=EndpointContainerResource.d.ts.map