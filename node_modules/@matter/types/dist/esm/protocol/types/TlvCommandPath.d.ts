/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { TypeFromSchema } from "#tlv/index.js";
/** @see {@link MatterSpecification.v13.Core}, section 10.6.11 */
export declare const TlvCommandPath: import("#tlv/index.js").ObjectSchema<{
    endpointId: import("#tlv/index.js").OptionalFieldType<import("../../datatype/EndpointNumber.js").EndpointNumber>;
    clusterId: import("#tlv/index.js").FieldType<import("../../datatype/ClusterId.js").ClusterId>;
    commandId: import("#tlv/index.js").FieldType<import("../../datatype/CommandId.js").CommandId>;
}>;
export type CommandPath = TypeFromSchema<typeof TlvCommandPath>;
//# sourceMappingURL=TlvCommandPath.d.ts.map