import { FC } from "react";
import style from "./Image.module.css";

interface ImageProps {
  src: string;
  alt: string;
  clasName?: string;
}

const Image: FC<ImageProps> = ({ src, alt, clasName = "" }) => {
  return (
    <div className={[style.Image, clasName].join(" ")}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
