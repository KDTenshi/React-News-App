import { FC } from "react";
import { Button, Slider } from "../../../../shared/ui";
import { useGetCategoriesQuery } from "../../../../shared/api/newsApi";
import style from "./NewsCategories.module.css";
import { useAppDispatch } from "../../../../app/store/appStore";
import { changeCategory } from "../../model/filtersSlice";

const NewsCategories: FC = () => {
  const { data } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();

  const handleCategory = (category: string) => {
    dispatch(changeCategory(category));
  };

  return (
    <Slider loop className={style.NewsCategories}>
      {data &&
        ["All", ...data.categories].map((category) => (
          <Button key={category} className={style.Category} onClick={() => handleCategory(category)}>
            {category}
          </Button>
        ))}
    </Slider>
  );
};

export default NewsCategories;
