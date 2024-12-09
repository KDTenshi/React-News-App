import { FC } from "react";
import { INews } from "../../../../shared/types/types";
import style from "./NewsCard.module.css";
import { Image } from "../../../../shared/ui";
import { formateDateString } from "../../utils/formateDateString";

interface NewsCardProps {
  size?: "big" | "small";
  item: INews;
}

const NewsCard: FC<NewsCardProps> = ({ size = "big", item }) => {
  const description =
    item.description && item.description.length > 200 ? `${item.description?.substring(0, 199)}…` : item.description;

  return (
    <div className={size === "big" ? style.NewsCard_Big : style.NewsCard_Small}>
      <Image src={item.image_url} alt={item.title} className={size === "big" ? style.Image_Big : style.Image_Small} />
      <div className={style.Info}>
        <h2 className={style.Title}>{item.title}</h2>
        <p className={style.Date}>{formateDateString(item.pubDate)}</p>
        {size === "big" && <p className={style.Description}>{description}</p>}
      </div>
    </div>
  );
};

export default NewsCard;
