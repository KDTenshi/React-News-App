import { FC } from "react";
import { Slider } from "../../../../shared/ui";
import { useGetLatestNewsQuery } from "../../../../shared/api/newsApi";
import NewsCard from "../card/NewsCard";
import NewsCardSkeleton from "../card/NewsCardSkeleton";

const NewsSlider: FC = () => {
  const { data, isLoading } = useGetLatestNewsQuery();

  return (
    <>
      <Slider loop slidesPerView={1}>
        {isLoading ? <NewsCardSkeleton /> : data && data.news.map((item) => <NewsCard key={item.id} newsItem={item} />)}
      </Slider>
    </>
  );
};

export default NewsSlider;
