import { AnchorHTMLAttributes, FC } from "react";
import style from "./Link.module.css";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  blank?: boolean;
}

const Link: FC<LinkProps> = ({ active = false, children, className = "", href = "/", blank = false, ...restProps }) => {
  const fullClassName = [style.Link, active ? style.Link_Active : "", className].join(" ");
  const target = blank ? "_blank" : "";

  return (
    <RouterLink to={href} className={fullClassName} {...restProps} target={target}>
      {children}
    </RouterLink>
  );
};

export default Link;
