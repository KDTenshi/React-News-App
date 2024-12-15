import { FC } from "react";
import { Slider } from "../../../../shared/ui";
import { useGetLatestNewsQuery } from "../../../../shared/api/newsApi";
import NewsCard from "../card/NewsCard";

const NewsSlider: FC = () => {
  const { data } = useGetLatestNewsQuery();

  return (
    <>
      <Slider loop slidesPerView={1}>
        {data && data.news.map((item) => <NewsCard key={item.id} newsItem={item} />)}
      </Slider>
    </>
  );
};

export default NewsSlider;
