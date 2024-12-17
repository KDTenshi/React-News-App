import { FC } from "react";
import NewsFilters from "../filters/NewsFilters";
import NewsList from "../list/NewsList";
import NewsPagination from "../pagination/NewsPagination";

const NewsListFiltered: FC = () => {
  return (
    <div>
      <NewsFilters />
      <NewsList />
      <NewsPagination />
    </div>
  );
};

export default NewsListFiltered;
