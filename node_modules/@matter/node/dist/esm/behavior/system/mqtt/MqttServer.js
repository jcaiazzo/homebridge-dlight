/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { RemoteServer } from "../remote/RemoteServer.js";
import { MqttInterface } from "./MqttInterface.js";
class MqttServer extends RemoteServer {
  static id = "mqtt";
  static interfaceType = MqttInterface;
}
((MqttServer2) => {
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
    address = "mqtt:localhost/matter/{node}";
  }
  MqttServer2.State = State;
})(MqttServer || (MqttServer = {}));
export {
  MqttServer
};
//# sourceMappingURL=MqttServer.js.map
