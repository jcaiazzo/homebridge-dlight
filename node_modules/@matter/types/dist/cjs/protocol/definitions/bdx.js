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
var bdx_exports = {};
__export(bdx_exports, {
  BDX_PROTOCOL_ID: () => BDX_PROTOCOL_ID,
  BdxMessageType: () => BdxMessageType,
  BdxStatusCode: () => BdxStatusCode
});
module.exports = __toCommonJS(bdx_exports);
/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
const BDX_PROTOCOL_ID = 2;
var BdxMessageType = /* @__PURE__ */ ((BdxMessageType2) => {
  BdxMessageType2[BdxMessageType2["SendInit"] = 1] = "SendInit";
  BdxMessageType2[BdxMessageType2["SendAccept"] = 2] = "SendAccept";
  BdxMessageType2[BdxMessageType2["ReceiveInit"] = 4] = "ReceiveInit";
  BdxMessageType2[BdxMessageType2["ReceiveAccept"] = 5] = "ReceiveAccept";
  BdxMessageType2[BdxMessageType2["BlockQuery"] = 16] = "BlockQuery";
  BdxMessageType2[BdxMessageType2["Block"] = 17] = "Block";
  BdxMessageType2[BdxMessageType2["BlockEof"] = 18] = "BlockEof";
  BdxMessageType2[BdxMessageType2["BlockAck"] = 19] = "BlockAck";
  BdxMessageType2[BdxMessageType2["BlockAckEof"] = 20] = "BlockAckEof";
  BdxMessageType2[BdxMessageType2["BlockQueryWithSkip"] = 21] = "BlockQueryWithSkip";
  return BdxMessageType2;
})(BdxMessageType || {});
var BdxStatusCode = /* @__PURE__ */ ((BdxStatusCode2) => {
  BdxStatusCode2[BdxStatusCode2["Success"] = 0] = "Success";
  BdxStatusCode2[BdxStatusCode2["LengthTooLarge"] = 18] = "LengthTooLarge";
  BdxStatusCode2[BdxStatusCode2["LengthTooShort"] = 19] = "LengthTooShort";
  BdxStatusCode2[BdxStatusCode2["LengthMismatch"] = 20] = "LengthMismatch";
  BdxStatusCode2[BdxStatusCode2["LengthRequired"] = 21] = "LengthRequired";
  BdxStatusCode2[BdxStatusCode2["BadMessageContent"] = 22] = "BadMessageContent";
  BdxStatusCode2[BdxStatusCode2["BadBlockCounter"] = 23] = "BadBlockCounter";
  BdxStatusCode2[BdxStatusCode2["UnexpectedMessage"] = 24] = "UnexpectedMessage";
  BdxStatusCode2[BdxStatusCode2["ResponderBusy"] = 25] = "ResponderBusy";
  BdxStatusCode2[BdxStatusCode2["TransferFailedUnknownError"] = 31] = "TransferFailedUnknownError";
  BdxStatusCode2[BdxStatusCode2["TransferMethodNotSupported"] = 80] = "TransferMethodNotSupported";
  BdxStatusCode2[BdxStatusCode2["FileDesignatorUnknown"] = 81] = "FileDesignatorUnknown";
  BdxStatusCode2[BdxStatusCode2["StartOffsetNotSupported"] = 82] = "StartOffsetNotSupported";
  BdxStatusCode2[BdxStatusCode2["VersionNotSupported"] = 83] = "VersionNotSupported";
  BdxStatusCode2[BdxStatusCode2["Unknown"] = 95] = "Unknown";
  BdxStatusCode2[BdxStatusCode2["GeneralError"] = 65535] = "GeneralError";
  return BdxStatusCode2;
})(BdxStatusCode || {});
//# sourceMappingURL=bdx.js.map
