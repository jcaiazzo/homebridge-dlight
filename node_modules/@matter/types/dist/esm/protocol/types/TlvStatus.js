/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../tlv/TlvObject.js";
const TlvStatus = TlvObject({
  // StatusIB
  status: TlvField(0, TlvEnum()),
  // 8Bit
  clusterStatus: TlvOptionalField(1, TlvEnum())
});
export {
  TlvStatus
};
//# sourceMappingURL=TlvStatus.js.map
