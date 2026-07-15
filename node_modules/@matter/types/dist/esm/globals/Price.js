/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvInt64 } from "../tlv/TlvNumber.js";
import { TlvCurrency } from "./Currency.js";
const TlvPrice = TlvObject({ amount: TlvField(0, TlvInt64), currency: TlvField(1, TlvCurrency) });
export {
  TlvPrice
};
//# sourceMappingURL=Price.js.map
