import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersType } from "../../../shared/types/types";
import { MAX_PAGE_NUMBER } from "../../../shared/constants/constants";

const initialState: FiltersType = {
  category: null,
  keywords: null,
  page_number: 1,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<string>) {
      if (action.payload === "All") {
        state.category = null;
      } else {
        state.category = action.payload;
      }
    },
    changeKeywords(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.keywords = null;
      } else {
        state.keywords = action.payload;
      }
    },
    changePageNumber(state, action: PayloadAction<number>) {
      const page = action.payload;

      if (page <= 0) {
        state.page_number = 1;
      } else if (page >= MAX_PAGE_NUMBER) {
        state.page_number = MAX_PAGE_NUMBER;
      } else {
        state.page_number = page;
      }
    },
  },
});

export const { changeCategory, changeKeywords, changePageNumber } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
