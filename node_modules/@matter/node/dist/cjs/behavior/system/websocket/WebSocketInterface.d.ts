/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { RemoteInterface } from "../remote/RemoteInterface.js";
/**
 * WebSocket remote interface.
 */
export declare class WebSocketInterface extends RemoteInterface {
    #private;
    static protocol: string;
    protected start(): Promise<void>;
    protected stop(): Promise<void>;
}
//# sourceMappingURL=WebSocketInterface.d.ts.map