import { FC, PropsWithChildren } from "react";
import { Swiper, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import Button from "../button/Button";
import style from "./Slider.module.css";

interface SliderButtonProps {
  direction: "left" | "right";
}

const SliderButton: FC<SliderButtonProps> = ({ direction }) => {
  const arrow = direction === "left" ? "<" : ">";
  const swiper = useSwiper();

  const handleClick = () => {
    if (direction === "left") {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return (
    <Button className={direction === "left" ? style.Button_Left : style.Button_Right} onClick={handleClick}>
      {arrow}
    </Button>
  );
};

const Slider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper className={style.Slider} slidesPerView={1} loop>
      <SliderButton direction="left" />
      {children}
      <SliderButton direction="right" />
    </Swiper>
  );
};

export default Slider;
