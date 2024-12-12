import { useEffect, useState } from "react";
import { getCurrentDate } from "./getCurrentDate";

export const useDate = () => {
  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    const interval = setInterval(() => {
      const dateNow = getCurrentDate();

      if (date !== dateNow) {
        setDate(dateNow);
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  });

  return date;
};
