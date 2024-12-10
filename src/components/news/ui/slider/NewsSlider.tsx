import { FC } from "react";
import { INews } from "../../../../shared/types/types";
import { SwiperSlide } from "swiper/react";
import NewsCard from "../card/NewsCard";
import "swiper/swiper-bundle.css";
import style from "./NewsSlider.module.css";
import Slider from "../../../../shared/ui/slider/Slider";

interface NewsSliderProps {
  news: INews[];
}

const NewsSlider: FC<NewsSliderProps> = ({ news }) => {
  return (
    <Slider>
      {news.map((item) => (
        <SwiperSlide key={item.article_id} className={style.Slide}>
          <NewsCard item={item} size="big" />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default NewsSlider;
