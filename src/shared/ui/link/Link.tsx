import { AnchorHTMLAttributes, FC } from "react";
import style from "./Link.module.css";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  blank?: boolean;
}

const Link: FC<LinkProps> = ({ active = false, children, className = "", href = "/", blank = false, ...restProps }) => {
  const fullClassName = [style.Link, active ? style.Link_Active : "", className].join(" ");
  const target = blank ? "_blank" : "";

  return (
    <a href={href} className={fullClassName} {...restProps} target={target}>
      {children}
    </a>
  );
};

export default Link;
