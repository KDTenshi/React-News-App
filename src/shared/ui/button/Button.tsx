import { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <button className={style.Button} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
