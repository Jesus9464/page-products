import { createAsyncThunk } from "@reduxjs/toolkit";
import * as services from "../../service";

export const getDataThunks = createAsyncThunk("products/getData", async () => {
  const { response, success } = await services.getProductsApi();

  if (!success || !response)
    return {
      success: false,
      errorMessage: "Error getting data",
    };

  return { success: true, response: response };
});
