import { FC } from "react";
import style from "./Header.module.css";
import { useDate } from "../utils/useDate";

const Header: FC = () => {
  const date = useDate();

  return (
    <header className={style.Header}>
      <div className={style.Info}>
        <h1 className={style.Title}>React News</h1>
        <p className={style.Date}>{date}</p>
      </div>
    </header>
  );
};

export default Header;
