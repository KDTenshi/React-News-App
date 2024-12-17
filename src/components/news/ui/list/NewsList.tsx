import { FC } from "react";
import { useGetFilteredNewsQuery } from "../../../../shared/api/newsApi";
import NewsCard from "../card/NewsCard";
import style from "./NewsList.module.css";
import { useAppSelector } from "../../../../app/store/appStore";
import { MAX_PAGE_SIZE } from "../../../../shared/constants/constants";
import NewsCardSkeleton from "../card/NewsCardSkeleton";

const NewsList: FC = () => {
  const filters = useAppSelector((state) => state.filters);
  const { data, isFetching } = useGetFilteredNewsQuery(filters);

  return (
    <div className={style.NewsList}>
      {isFetching
        ? [...new Array(MAX_PAGE_SIZE)].map((_, index) => <NewsCardSkeleton key={index} size="small" />)
        : data && data.news.map((item) => <NewsCard key={item.id} newsItem={item} size="small" />)}
    </div>
  );
};

export default NewsList;
