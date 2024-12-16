import { FC, useEffect, useState } from "react";
import style from "./NewsSearch.module.css";
import { useDebounce } from "../../utils/useDebounce";
import { useSearchParams } from "react-router-dom";

const NewsSearch: FC = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const debounceKeywords = useDebounce(search, 500);

  useEffect(() => {
    if (debounceKeywords) {
      setSearchParams((prev) => ({ ...prev, keywords: debounceKeywords }));
    } else {
      setSearchParams((prev) => ({ ...prev }));
    }
  }, [debounceKeywords]);

  return (
    <form className={style.NewsSearch}>
      <input
        type="text"
        placeholder="Search..."
        className={style.SearchBar}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default NewsSearch;
