import { FC } from "react";
import { useGetFilteredNewsQuery } from "../../../../shared/api/newsApi";
import NewsCard from "../card/NewsCard";
import style from "./NewsList.module.css";
import { useSearchParams } from "react-router-dom";

const NewsList: FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data } = useGetFilteredNewsQuery(category);

  return (
    <div className={style.NewsList}>
      {data && data.news.map((item) => <NewsCard key={item.id} newsItem={item} size="small" />)}
    </div>
  );
};

export default NewsList;
