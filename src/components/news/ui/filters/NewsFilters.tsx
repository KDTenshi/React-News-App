import { FC } from "react";
import style from "./NewsFilters.module.css";
import NewsSearch from "../search/NewsSearch";
import NewsCategories from "../categories/NewsCategories";

const NewsFilters: FC = () => {
  return (
    <div className={style.NewsFilters}>
      <NewsSearch />
      <NewsCategories />
    </div>
  );
};

export default NewsFilters;
