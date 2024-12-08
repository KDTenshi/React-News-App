import { FC } from "react";
import style from "./Image.module.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: FC<ImageProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={[style.Image, className].join(" ")}>
      <img src={src} alt={alt} onError={(e) => (e.currentTarget.src = "")} />
    </div>
  );
};

export default Image;
