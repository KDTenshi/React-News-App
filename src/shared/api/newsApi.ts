import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NEWS_API_BASE_URL, NEWS_API_KEY } from "./apiInfo";
import { NewsAPICategoriesResponse, NewsAPIResponse } from "../types/types";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: NEWS_API_BASE_URL }),
  endpoints: (builder) => ({
    getLatestNews: builder.query<NewsAPIResponse, void>({
      query: () => ({
        url: "latest-news",
        params: {
          apiKey: NEWS_API_KEY,
        },
      }),
    }),
    getFilteredNews: builder.query<NewsAPIResponse, string | null>({
      query: (query) => ({
        url: "search",
        params: {
          apiKey: NEWS_API_KEY,
          page_size: 5,
          category: query,
        },
      }),
    }),
    getCategories: builder.query<NewsAPICategoriesResponse, void>({
      query: () => ({
        url: "available/categories",
        params: {
          apiKey: NEWS_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetLatestNewsQuery, useGetFilteredNewsQuery, useGetCategoriesQuery } = newsApi;
