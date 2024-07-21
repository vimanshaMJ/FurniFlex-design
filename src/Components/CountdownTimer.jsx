import React, { useState, useEffect } from "react";
import classes from "./CountdownTimer.module.css";

export default function CountdownTimer({
  hours = 0,
  minutes = 0,
  seconds = 0,
}) {
  const [time, setTime] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const { hours, minutes, seconds } = time;

      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerId);
      } else if (minutes === 0 && seconds === 0) {
        setTime({ hours: hours - 1, minutes: 59, seconds: 59 });
      } else if (seconds === 0) {
        setTime({ hours, minutes: minutes - 1, seconds: 59 });
      } else {
        setTime({ hours, minutes, seconds: seconds - 1 });
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [time]);

  const { hours: h, minutes: m, seconds: s } = time;

  return (
    <div className={classes.timerRow}>
      <div className={classes.timeBox}>{String(h).padStart(2, "0")} H</div>
      <div className={classes.timeBox}>{String(m).padStart(2, "0")} M</div>
      <div className={classes.timeBox}>{String(s).padStart(2, "0")} S</div>
    </div>
  );
}
