import { FC } from "react";
import { MAX_PAGE_NUMBER } from "../../../../shared/constants/constants";
import style from "./NewsPagination.module.css";
import { Button } from "../../../../shared/ui";
import { useAppDispatch, useAppSelector } from "../../../../app/store/appStore";
import { changePageNumber } from "../../model/filtersSlice";

const NewsPagination: FC = () => {
  const pageNumber = useAppSelector((state) => state.filters.page_number);
  const dispatch = useAppDispatch();
  const pages = [...new Array(MAX_PAGE_NUMBER)];

  const toPrevPage = () => {
    dispatch(changePageNumber(pageNumber - 1));
  };

  const toNextPage = () => {
    dispatch(changePageNumber(pageNumber + 1));
  };

  const toPage = (page: number) => {
    dispatch(changePageNumber(page));
  };

  return (
    <div className={style.NewsPagination}>
      <Button onClick={toPrevPage}>{"<"}</Button>
      <div className={style.Pages}>
        {pages.map((_, page) => (
          <Button key={page} onClick={() => toPage(page + 1)} active={pageNumber === page + 1}>
            {page + 1}
          </Button>
        ))}
      </div>
      <Button onClick={toNextPage}>{">"}</Button>
    </div>
  );
};

export default NewsPagination;
