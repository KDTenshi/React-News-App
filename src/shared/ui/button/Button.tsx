import { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, className = "", ...restProps }) => {
  return (
    <button className={[style.Button, className].join(" ")} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
