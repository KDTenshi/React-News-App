import { FC } from "react";
import { Link, Slider } from "../../../../shared/ui";
import { useGetCategoriesQuery } from "../../../../shared/api/newsApi";
import style from "./NewsCategories.module.css";

const NewsCategories: FC = () => {
  const { data } = useGetCategoriesQuery();

  return (
    <Slider loop className={style.NewsCategories}>
      {data &&
        ["All", ...data.categories].map((category) => (
          <Link key={category} href={category === "All" ? "/" : `?category=${category}`} className={style.Category}>
            {category}
          </Link>
        ))}
    </Slider>
  );
};

export default NewsCategories;
