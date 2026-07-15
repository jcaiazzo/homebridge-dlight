/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
const contextAgents = /* @__PURE__ */ new WeakMap();
function ContextAgents(context) {
  let instance = contextAgents.get(context);
  if (instance === void 0) {
    instance = create(context);
    contextAgents.set(context, instance);
  }
  return instance;
}
function create(context) {
  const agents = /* @__PURE__ */ new Map();
  return {
    [Symbol.toStringTag]: "ContextAgents",
    agentFor(endpoint) {
      let agent = agents.get(endpoint);
      if (agent === void 0) {
        agents.set(endpoint, agent = new endpoint.agentType(endpoint, context));
      }
      return agent;
    }
  };
}
export {
  ContextAgents
};
//# sourceMappingURL=ContextAgents.js.map
