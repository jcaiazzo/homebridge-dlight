/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateStream } from "#node/integration/StateStream.js";
/**
 * An RPC request.
 */
export type RemoteRequest = RemoteRequest.Read | RemoteRequest.Write | RemoteRequest.Add | RemoteRequest.Delete | RemoteRequest.Invoke | RemoteRequest.Subscribe;
/**
 * Validate and return request object.
 */
export declare function RemoteRequest(request: unknown): RemoteRequest;
export declare namespace RemoteRequest {
    interface Base {
        target: string;
        id?: string;
    }
    interface Read extends Base {
        method: "read";
    }
    interface Write extends Base {
        method: "write";
        value: unknown;
    }
    interface Add extends Base {
        method: "add";
        value: unknown;
    }
    interface Delete extends Base {
        method: "delete";
    }
    interface Invoke extends Base {
        method: "invoke";
        target: string;
        parameters?: unknown;
    }
    interface Subscribe extends Base, StateStream.Options {
        method: "subscribe";
    }
}
//# sourceMappingURL=RemoteRequest.d.ts.map