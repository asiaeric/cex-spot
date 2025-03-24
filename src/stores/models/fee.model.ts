import { action, Action, thunk, Thunk } from "easy-peasy";

import { fetchFee } from "@/services/fee";
import { Fee } from "@/types";

export interface FeeState {
  fee: Fee | undefined;
}

export interface FeeActions {
  setPairFee: Action<this, Fee>;
}

export interface FeeThunks {
  getFee: Thunk<this, string>;
}

export interface FeeModel extends FeeActions, FeeState, FeeThunks {}

export const feeModel: FeeModel = {
  fee: undefined,
  setPairFee: action((state, payload) => {
    state.fee = payload;
  }),
  getFee: thunk(async (actions, payload) => {
    try {
      const response = await fetchFee(payload);
      actions.setPairFee(response);
    } catch (err) {
      console.log(err);
    }
  }),
};
