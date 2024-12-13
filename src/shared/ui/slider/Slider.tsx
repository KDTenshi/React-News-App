import { FC, PropsWithChildren } from "react";
import style from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Button from "../button/Button";
import { Navigation } from "swiper/modules";

interface SliderProps {
  loop?: boolean;
}

const Slider: FC<PropsWithChildren<SliderProps>> = ({ children, loop = false }) => {
  const isChildrenArray = Array.isArray(children);
  const unique = Date.now();

  const prevButtonClassName = [style.Button, style.Button_Prev, `prev${unique}`].join(" ");
  const nextButtonClassName = [style.Button, style.Button_Next, `next${unique}`].join(" ");

  const sliderContent = isChildrenArray ? (
    [...children].map((item) => (
      <SwiperSlide key={item.key} className={style.Slide}>
        {item}
      </SwiperSlide>
    ))
  ) : (
    <SwiperSlide>{children}</SwiperSlide>
  );

  return (
    <div className={style.Wrapper}>
      <Button className={prevButtonClassName}>{"<"}</Button>
      <Swiper
        className={style.Slider}
        modules={[Navigation]}
        slidesPerView={"auto"}
        loop={loop}
        navigation={{
          prevEl: `.prev${unique}`,
          nextEl: `.next${unique}`,
        }}
      >
        {sliderContent}
      </Swiper>
      <Button className={nextButtonClassName}>{">"}</Button>
    </div>
  );
};

export default Slider;
