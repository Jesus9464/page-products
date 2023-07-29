import { createReducer } from "@reduxjs/toolkit";
//@ts-ignore
import type { WritableDraft } from "immer/dist/internal";

import { ParsedDataItem } from "@/common/helpers";
import { getDataThunks } from "../actions/thunks";
import { addToCart } from "../actions/actions";

export interface dataState {
  data: ParsedDataItem[] | null;
  addTocart: ParsedDataItem[];
}

const initialState: dataState = {
  data: null,
  addTocart: [],
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(getDataThunks.fulfilled, (state, action) => {
    state.data = action.payload.response as WritableDraft<
      ParsedDataItem[]
    > | null;
  });

  builder.addCase(addToCart, (state, action) => {
    if (action.payload) {
      const productToAdd = action.payload;
      state.addTocart.push(productToAdd);
    }
  });
});

export default dataReducer;

export type dataType = ReturnType<typeof dataReducer>;
