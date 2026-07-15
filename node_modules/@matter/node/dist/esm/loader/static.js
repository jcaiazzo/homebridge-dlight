/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { loader } from "./loader.js";
function load(path) {
  const parsed = path.match(/([^/]+)\/[^/]+\/[^/]+\.js/);
  if (parsed) {
    const [, group] = parsed;
    return loader.registry[group] ?? {};
  }
  return {};
}
export {
  load
};
//# sourceMappingURL=static.js.map
