import { createReducer } from "@reduxjs/toolkit";
//@ts-ignore
import type { WritableDraft } from "immer/dist/internal";

import { ParsedDataItem } from "@/common/helpers";
import { getDataThunks } from "../actions/thunks";

export interface dataState {
  data: ParsedDataItem[] | null;
}

const initialState: dataState = {
  data: null,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(getDataThunks.fulfilled, (state, action) => {
    state.data = action.payload.response as WritableDraft<
      ParsedDataItem[]
    > | null;
  });
});

export default dataReducer;

export type dataType = ReturnType<typeof dataReducer>;
