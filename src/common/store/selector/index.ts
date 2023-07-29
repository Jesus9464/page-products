import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { dataState } from "../redux";

export const productSelector = (state: RootState) => state.products;

export const productsSelector = createSelector(
  productSelector,
  (state) => state.data
);
