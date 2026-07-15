/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import type { StateStream } from "#node/integration/StateStream.js";
import type { LocalResponse } from "./LocalResponse.js";
/**
 * An RPC response.
 *
 * This is the serializable object delivered over the wire.
 */
export type RemoteResponse = RemoteResponse.OK | RemoteResponse.Value | RemoteResponse.Error | RemoteResponse.Change;
/**
 * Create a {@link RemoteResponse} from a {@link LocalResponse}.
 */
export declare function RemoteResponse(local: LocalResponse): RemoteResponse;
export declare namespace RemoteResponse {
    interface Base {
        id?: string;
    }
    interface OK extends Base {
        kind: "ok";
        requestId?: string;
    }
    interface Value extends Base {
        kind: "value";
        value: unknown;
    }
    interface Error extends Base {
        kind: "error";
        message: string;
        code: string;
    }
    type Change = Base & StateStream.WireChange;
    function describe(response: RemoteResponse): string;
}
//# sourceMappingURL=RemoteResponse.d.ts.map