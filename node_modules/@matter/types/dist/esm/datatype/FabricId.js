/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { TlvUInt64 } from "../tlv/TlvNumber.js";
import { TlvWrapper } from "../tlv/TlvWrapper.js";
function FabricId(value) {
  return BigInt(value);
}
((FabricId2) => {
  FabricId2.NO_FABRIC = FabricId2(0);
})(FabricId || (FabricId = {}));
const TlvFabricId = new TlvWrapper(
  TlvUInt64,
  (fabricId) => fabricId,
  (value) => FabricId(value)
);
export {
  FabricId,
  TlvFabricId
};
//# sourceMappingURL=FabricId.js.map
