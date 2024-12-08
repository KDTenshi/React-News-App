import { combineReducers } from "@reduxjs/toolkit";
import { newsApi } from "../../shared/api/newsApi";

export const appReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
});
