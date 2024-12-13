import { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const Button: FC<ButtonProps> = ({ children, className = "", active = false, ...restProps }) => {
  const fullClassName = [style.Button, active ? style.Button_Active : "", className].join(" ");

  return (
    <button className={fullClassName} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
