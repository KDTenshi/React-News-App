import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NEWS_API_BASE_URL, NEWS_API_KEY } from "./apiInfo";
import { NewsApiResponse } from "../types/types";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: NEWS_API_BASE_URL }),
  endpoints: (builder) => ({
    getLatestNews: builder.query<NewsApiResponse, void>({
      query: () => ({
        url: "",
        params: {
          language: "en",
          apikey: NEWS_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetLatestNewsQuery } = newsApi;
