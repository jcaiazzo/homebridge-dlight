/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvUInt16, TlvUInt8 } from "../tlv/TlvNumber.js";
const TlvCurrency = TlvObject({
  currency: TlvField(0, TlvUInt16.bound({ max: 999 })),
  decimalPoints: TlvField(1, TlvUInt8)
});
export {
  TlvCurrency
};
//# sourceMappingURL=Currency.js.map
