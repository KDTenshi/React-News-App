import { FC } from "react";
import NewsSearch from "../search/NewsSearch";
import NewsCategories from "../categories/NewsCategories";

const NewsFilters: FC = () => {
  return (
    <div>
      <NewsSearch />
      <NewsCategories />
    </div>
  );
};

export default NewsFilters;
