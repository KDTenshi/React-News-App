import { FC } from "react";
import style from "./NewsCard.module.css";

interface NewsCardSkeletonProps {
  size?: "big" | "small";
}

const NewsCardSkeleton: FC<NewsCardSkeletonProps> = ({ size = "big" }) => {
  const className = [style.Skeleton, size === "big" ? style.Skeleton_Big : style.Skeleton_Small].join(" ");
  return <div className={className}></div>;
};

export default NewsCardSkeleton;
