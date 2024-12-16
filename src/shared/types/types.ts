export interface INews {
  author: string;
  description: string;
  id: string;
  image: string;
  published: string;
  title: string;
  url: string;
}

export type NewsAPIResponse = {
  news: INews[];
  status: "ok" | "error";
  page: number;
};

export type NewsAPICategoriesResponse = {
  categories: string[];
  status: "ok" | "error";
  description: string;
};

export type FiltersType = {
  category: string | null;
  keywords: string | null;
};

export interface APIParams extends Partial<FiltersType> {
  apiKey: string;
}
