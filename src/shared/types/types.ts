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
