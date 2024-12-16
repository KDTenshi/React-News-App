import { combineReducers } from "@reduxjs/toolkit";
import { newsApi } from "../../shared/api/newsApi";
import { filtersReducer } from "../../components/news/model/filtersSlice";

export const appReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
  filters: filtersReducer,
});
