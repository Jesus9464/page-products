import get from "lodash/get";
import hasIn from "lodash/hasIn";
import set from "lodash/set";
import * as _ from "lodash";
import { PURGE } from "redux-persist";
import { combineReducers } from "redux";

import type { PayloadAction } from "@reduxjs/toolkit";

import dataReducer from "./redux";

const combinedRootReducer = combineReducers({
  products: dataReducer,
});

function rootReducer(state: any, action: PayloadAction) {
  if (PURGE.match(action.type)) {
    const clearState = {} as Record<string, Record<string, unknown>>;
    const clearWhitelist = [`data._persist`];

    for (const keyPath of clearWhitelist) {
      if (hasIn(state, keyPath)) set(clearState, keyPath, get(state, keyPath));
    }
    state = clearState;
  }

  return combinedRootReducer(state, action);
}

export default rootReducer;
