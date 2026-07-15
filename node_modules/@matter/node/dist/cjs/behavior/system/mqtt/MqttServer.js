"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var MqttServer_exports = {};
__export(MqttServer_exports, {
  MqttServer: () => MqttServer
});
module.exports = __toCommonJS(MqttServer_exports);
var import_RemoteServer = require("../remote/RemoteServer.js");
var import_MqttInterface = require("./MqttInterface.js");
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
class MqttServer extends import_RemoteServer.RemoteServer {
  static id = "mqtt";
  static interfaceType = import_MqttInterface.MqttInterface;
}
((MqttServer2) => {
  class State extends import_RemoteServer.RemoteServer.State {
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
//# sourceMappingURL=MqttServer.js.map
