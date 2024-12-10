import { FC } from "react";
import style from "./NewsList.module.css";
import { INews } from "../../../../shared/types/types";
import { NewsCard } from "../../index";

interface NewsListProps {
  news: INews[];
  cardSize?: "big" | "small";
}

const NewsList: FC<NewsListProps> = ({ news, cardSize = "small" }) => {
  return (
    <div className={style.NewsList}>
      {news.map((item) => (
        <NewsCard key={item.article_id} item={item} size={cardSize} />
      ))}
    </div>
  );
};

export default NewsList;
