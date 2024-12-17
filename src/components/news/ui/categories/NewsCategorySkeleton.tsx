import { FC } from "react";
import style from "./NewsCategories.module.css";

const NewsCategorySkeleton: FC = () => {
  return <div className={style.Skeleton}></div>;
};

export default NewsCategorySkeleton;
