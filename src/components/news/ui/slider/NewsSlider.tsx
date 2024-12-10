import { FC } from "react";
import { INews } from "../../../../shared/types/types";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import NewsCard from "../card/NewsCard";
import "swiper/swiper-bundle.css";
import style from "./NewsSlider.module.css";
import { Button } from "../../../../shared/ui";

interface NewsSliderProps {
  news: INews[];
}

interface SliderButtonProps {
  direction: "left" | "right";
}

const SliderButton: FC<SliderButtonProps> = ({ direction }) => {
  const swiper = useSwiper();
  const arrow = direction === "left" ? "<" : ">";

  const handleClick = () => {
    if (direction === "left") {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return (
    <Button onClick={handleClick} className={direction === "left" ? style.Button_Left : style.Button_Right}>
      {arrow}
    </Button>
  );
};

const NewsSlider: FC<NewsSliderProps> = ({ news }) => {
  return (
    <Swiper slidesPerView={1} className={style.NewsSlider}>
      <SliderButton direction="left" />
      {news.map((item) => (
        <SwiperSlide key={item.article_id} className={style.Slide}>
          <NewsCard item={item} size="big" />
        </SwiperSlide>
      ))}
      <SliderButton direction="right" />
    </Swiper>
  );
};

export default NewsSlider;
