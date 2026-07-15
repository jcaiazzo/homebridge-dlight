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
var HttpServer_exports = {};
__export(HttpServer_exports, {
  HttpServer: () => HttpServer
});
module.exports = __toCommonJS(HttpServer_exports);
var import_RemoteServer = require("../remote/RemoteServer.js");
var import_HttpInterface = require("./HttpInterface.js");
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
class HttpServer extends import_RemoteServer.RemoteServer {
  static id = "http";
  static interfaceType = import_HttpInterface.HttpInterface;
}
((HttpServer2) => {
  class State extends import_RemoteServer.RemoteServer.State {
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
    address = "http+unix:matter.sock";
  }
  HttpServer2.State = State;
})(HttpServer || (HttpServer = {}));
//# sourceMappingURL=HttpServer.js.map
