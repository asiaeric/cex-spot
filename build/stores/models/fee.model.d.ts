import { Action, Thunk } from "easy-peasy";
import { Fee } from "../../types";
export interface FeeState {
    fee: Fee | undefined;
}
export interface FeeActions {
    setPairFee: Action<this, Fee>;
}
export interface FeeThunks {
    getFee: Thunk<this, string>;
}
export interface FeeModel extends FeeActions, FeeState, FeeThunks {
}
export declare const feeModel: FeeModel;
//# sourceMappingURL=fee.model.d.ts.map