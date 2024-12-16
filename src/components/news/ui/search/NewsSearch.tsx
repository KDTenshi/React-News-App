import { FC, useEffect, useState } from "react";
import style from "./NewsSearch.module.css";
import { useDebounce } from "../../utils/useDebounce";
import { useAppDispatch } from "../../../../app/store/appStore";
import { changeKeywords } from "../../model/filtersSlice";

const NewsSearch: FC = () => {
  const [search, setSearch] = useState("");
  const debounceKeywords = useDebounce(search, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeKeywords(debounceKeywords));
  }, [debounceKeywords]);

  return (
    <form className={style.NewsSearch} onSubmit={(e) => e.preventDefault()}>
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
