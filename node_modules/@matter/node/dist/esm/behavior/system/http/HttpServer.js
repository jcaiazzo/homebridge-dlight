/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { RemoteServer } from "../remote/RemoteServer.js";
import { HttpInterface } from "./HttpInterface.js";
class HttpServer extends RemoteServer {
  static id = "http";
  static interfaceType = HttpInterface;
}
((HttpServer2) => {
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
    address = "http+unix:matter.sock";
  }
  HttpServer2.State = State;
})(HttpServer || (HttpServer = {}));
export {
  HttpServer
};
//# sourceMappingURL=HttpServer.js.map
