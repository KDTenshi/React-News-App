import { FC } from "react";
import { useGetFilteredNewsQuery } from "../../../../shared/api/newsApi";
import NewsCard from "../card/NewsCard";
import style from "./NewsList.module.css";

const NewsList: FC = () => {
  const { data } = useGetFilteredNewsQuery();

  return (
    <div className={style.NewsList}>
      {data && data.news.map((item) => <NewsCard key={item.id} newsItem={item} size="small" />)}
    </div>
  );
};

export default NewsList;
