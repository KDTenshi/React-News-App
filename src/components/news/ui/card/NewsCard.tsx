import { FC } from "react";
import { INews } from "../../../../shared/types/types";
import style from "./NewsCard.module.css";
import { Image } from "../../../../shared/ui";
import { getShortDescription } from "../../utils/getShortDescription";
import { formateDateString } from "../../utils/formateDateString";

interface NewsCardProps {
  newsItem: INews;
  size?: "big" | "small";
}

const NewsCard: FC<NewsCardProps> = ({ newsItem, size = "big" }) => {
  return (
    <div className={style.NewsCard}>
      <Image
        src={newsItem.image}
        alt={newsItem.title}
        clasName={size === "big" ? style.Image_Big : style.Image_Small}
      />
      <div className={style.Info}>
        <h2 className={style.Title}>{newsItem.title}</h2>
        <p className={style.Date}>{formateDateString(newsItem.published)}</p>
        {size === "big" && <p className={style.Description}>{getShortDescription(newsItem.description)}</p>}
      </div>
    </div>
  );
};

export default NewsCard;
