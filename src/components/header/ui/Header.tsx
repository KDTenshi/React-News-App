import { FC, useEffect, useState } from "react";
import { getCurrentDateString } from "../utils/getCurrentDateString";
import style from "./Header.module.css";

const Header: FC = () => {
  const [date, setDate] = useState(getCurrentDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = getCurrentDateString();

      if (date !== newDate) setDate(newDate);
    }, 60 * 1000);

    return () => clearInterval(interval);
  });

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
