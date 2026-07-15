/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { RemoteServer } from "../remote/RemoteServer.js";
import { HttpInterface } from "./HttpInterface.js";
/**
 * Allows control of a Matter node using an HTTP API.
 */
export declare class HttpServer extends RemoteServer {
    static readonly id = "http";
    static readonly interfaceType: typeof HttpInterface;
}
export declare namespace HttpServer {
    class State extends RemoteServer.State {
        /**
         * The HTTP server address.
         *
         * Supported protocols:
         *
         *   - http
         *   - https
         *   - http+unix (HTTP over UNIX socket)
         *   - https+unix (HTTPS over UNIX socket)
         */
        address: string;
    }
}
//# sourceMappingURL=HttpServer.d.ts.map