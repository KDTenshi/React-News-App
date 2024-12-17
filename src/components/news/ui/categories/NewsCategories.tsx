import { FC } from "react";
import { Button, Slider } from "../../../../shared/ui";
import { useGetCategoriesQuery } from "../../../../shared/api/newsApi";
import style from "./NewsCategories.module.css";
import { useAppDispatch, useAppSelector } from "../../../../app/store/appStore";
import { changeCategory } from "../../model/filtersSlice";
import NewsCategorySkeleton from "./NewsCategorySkeleton";

const NewsCategories: FC = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.filters.category);

  const allCategories = data ? ["All", ...data.categories] : [...new Array(10)];

  const handleCategory = (category: string) => {
    dispatch(changeCategory(category));
  };

  return (
    <Slider loop className={style.NewsCategories}>
      {isLoading
        ? allCategories.map((_, index) => <NewsCategorySkeleton key={index} />)
        : data &&
          allCategories.map((category) => (
            <Button
              key={category}
              className={style.Category}
              active={!selectedCategory ? category === "All" : category === selectedCategory}
              onClick={() => handleCategory(category)}
            >
              {category}
            </Button>
          ))}
    </Slider>
  );
};

export default NewsCategories;
