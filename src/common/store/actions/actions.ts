import { ParsedDataItem } from "@/common/helpers";
import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction<ParsedDataItem>("products/addToCart");
