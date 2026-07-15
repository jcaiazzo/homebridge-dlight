/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
export declare const BDX_PROTOCOL_ID = 2;
export declare enum BdxMessageType {
    SendInit = 1,
    SendAccept = 2,
    ReceiveInit = 4,
    ReceiveAccept = 5,
    BlockQuery = 16,
    Block = 17,
    BlockEof = 18,
    BlockAck = 19,
    BlockAckEof = 20,
    BlockQueryWithSkip = 21
}
export declare enum BdxStatusCode {
    /**
     * Success.
     */
    Success = 0,
    /**
     * Definite length too large to support.
     * For example, trying to SendInit with too large of a file.
     */
    LengthTooLarge = 18,
    /**
     * Definite length proposed for transfer is too short for the context based on the responder’s knowledge of
     * expected size.
     */
    LengthTooShort = 19,
    /**
     * Pre-negotiated size of transfer was not fulfilled prior to BlockAckEOF.
     */
    LengthMismatch = 20,
    /**
     * Responder can only support proposed transfer if definite length is provided.
     */
    LengthRequired = 21,
    /**
     * Received a malformed protocol message.
     */
    BadMessageContent = 22,
    /**
     * Received block counter out of order from expectation.
     */
    BadBlockCounter = 23,
    /**
     * Received a well-formed message that was contextually inappropriate for the current state of the transfer.
     */
    UnexpectedMessage = 24,
    /**
     * Responder is too busy to proceed with a new transfer at this moment.
     */
    ResponderBusy = 25,
    /**
     * Other error occurred, such as perhaps an input/output error occurring at one of the peers.
     */
    TransferFailedUnknownError = 31,
    /**
     * Received a message that mismatches the current transfer mode.
     */
    TransferMethodNotSupported = 80,
    /**
     * Attempted to request a file whose designator is unknown to the responder.
     */
    FileDesignatorUnknown = 81,
    /**
     * Proposed transfer with explicit start offset is not supported in current context.
     */
    StartOffsetNotSupported = 82,
    /**
     * Could not find a common supported version between initiator and responder.
     */
    VersionNotSupported = 83,
    /**
     * Other unexpected error.
     */
    Unknown = 95,
    /**
     * No additional error details available.
     */
    GeneralError = 65535
}
//# sourceMappingURL=bdx.d.ts.map