import { FC } from "react";
import { useGetFilteredNewsQuery } from "../../../../shared/api/newsApi";
import NewsCard from "../card/NewsCard";
import style from "./NewsList.module.css";
import { useAppSelector } from "../../../../app/store/appStore";

const NewsList: FC = () => {
  const filters = useAppSelector((state) => state.filters);
  const { data } = useGetFilteredNewsQuery(filters);

  return (
    <div className={style.NewsList}>
      {data && data.news.map((item) => <NewsCard key={item.id} newsItem={item} size="small" />)}
    </div>
  );
};

export default NewsList;
