import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const productSelector = (state: RootState) => state.products;

export const productsSelector = createSelector(
  productSelector,
  (state) => state.data
);

export const productsAddCartSelector = createSelector(
  productSelector,
  (state) => state.addTocart
);
