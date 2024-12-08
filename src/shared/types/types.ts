export interface INews {
  article_id: string;
  title: string;
  link: string;
  description: string | null;
  pubDate: string;
  image_url: string;
  source_name: string;
}

export type NewsApiResponse = {
  status: "success" | "error";
  totalResults: number;
  results: INews[];
};
