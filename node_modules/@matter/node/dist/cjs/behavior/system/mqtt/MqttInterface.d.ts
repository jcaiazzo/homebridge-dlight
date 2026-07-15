/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { RemoteInterface } from "../remote/RemoteInterface.js";
/**
 * MQTT remote interface.
 *
 * Currently publishes a read-only feed.  Will address TODOs if there is real-world use.
 *
 * TODO - events
 * TODO - clean out topics from previous runs that are no longer relevant, e.g. deleted endpoint, removed attrs, etc.
 * TODO - TLV serialiation/deserialization
 */
export declare class MqttInterface extends RemoteInterface {
    #private;
    static protocol: string;
    protected start(): Promise<void>;
    protected stop(): Promise<void>;
}
//# sourceMappingURL=MqttInterface.d.ts.map