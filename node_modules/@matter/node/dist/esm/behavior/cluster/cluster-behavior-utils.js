/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
function introspectionInstanceOf(type) {
  return new type();
}
const isClient = /* @__PURE__ */ Symbol("is-client");
function markClientBehavior(type) {
  type[isClient] = true;
}
function isClientBehavior(type) {
  return type[isClient] && Object.hasOwn(type, isClient);
}
export {
  introspectionInstanceOf,
  isClientBehavior,
  markClientBehavior
};
//# sourceMappingURL=cluster-behavior-utils.js.map
