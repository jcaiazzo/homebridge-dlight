/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { RemoteServer } from "../remote/RemoteServer.js";
import { WebSocketInterface } from "./WebSocketInterface.js";
/**
 * Allows control of a Matter node using an HTTP API.
 */
export declare class WebSocketServer extends RemoteServer {
    static readonly id = "websocket";
    static readonly interfaceType: typeof WebSocketInterface;
}
export declare namespace WebSocketServer {
    class State extends RemoteServer.State {
        /**
         * The WebSocket address.
         *
         * Supported protocols:
         *
         *   - ws (unencrypted WebSocket)
         *   - wss (encrypted WebSocket)
         *   - ws+unix (WebSockets over a UNIX socket)
         *   - wss+unix (WebSockets over a secure UNIX socket)
         */
        address: string;
    }
}
//# sourceMappingURL=WebSocketServer.d.ts.map