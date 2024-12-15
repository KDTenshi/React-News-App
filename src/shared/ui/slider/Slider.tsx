import { FC, PropsWithChildren } from "react";
import style from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Button from "../button/Button";
import { Navigation } from "swiper/modules";

interface SliderProps {
  loop?: boolean;
  className?: string;
  slidesPerView?: number | "auto";
}

const Slider: FC<PropsWithChildren<SliderProps>> = ({
  children,
  loop = false,
  slidesPerView = "auto",
  className = "",
}) => {
  const isChildrenArray = Array.isArray(children);
  const unique = Date.now();

  const prevButtonClassName = [style.Button, style.Button_Prev, `prev${unique}`].join(" ");
  const nextButtonClassName = [style.Button, style.Button_Next, `next${unique}`].join(" ");

  const sliderContent = isChildrenArray ? (
    <Swiper
      className={style.Slider}
      modules={[Navigation]}
      slidesPerView={slidesPerView}
      loop={loop}
      navigation={{
        prevEl: `.prev${unique}`,
        nextEl: `.next${unique}`,
      }}
    >
      {[...children].map((item) => (
        <SwiperSlide
          key={item.key}
          className={[style.Slide, slidesPerView === "auto" ? style.Slide_Auto : ""].join(" ")}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <>{children}</>
  );

  return (
    <div className={[style.Wrapper, className].join(" ")}>
      <Button className={prevButtonClassName}>{"<"}</Button>
      {sliderContent}
      <Button className={nextButtonClassName}>{">"}</Button>
    </div>
  );
};

export default Slider;
