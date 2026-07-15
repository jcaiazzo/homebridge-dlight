/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { RemoteServer } from "../remote/RemoteServer.js";
import { MqttInterface } from "./MqttInterface.js";
/**
 * Allows control of a Matter node via an MQTT broker.
 *
 * The broker must support MQTT version 5.
 */
export declare class MqttServer extends RemoteServer {
    static readonly id = "mqtt";
    static readonly interfaceType: typeof MqttInterface;
}
export declare namespace MqttServer {
    class State extends RemoteServer.State {
        /**
         * The MQTT broker address.
         *
         * Supported protocols:
         *
         *   - mqtt
         *   - mqtts
         *   - mqtt+ws (MQTT over web sockets)
         *   - mqtt+wss
         *   - mqtt+unix (MQTT over UNIX socket)
         *   - mqtts+unix
         *
         * If present, the path portion of the address adds a prefix to the topics registered by the server.
         */
        address: string;
    }
}
//# sourceMappingURL=MqttServer.d.ts.map