// @flow
import React, { useState, useEffect } from "react";
import InnerCircle from "./InnerCircle";

import OuterCircle from "./OuterCircle";
type Props = {
  minute: number,
  second: number,
  type: "focus" | "shortBreak" | "longBreak",
};
export default function Timer(props: Props) {
  const { minute, second, type } = props;
  const totalSecond: number = minute * 60 + second;
  const [time, setTime] = useState(totalSecond);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 0.0125);
    }, 12.5);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <OuterCircle total_time={totalSecond} remaning_time={time}>
        <InnerCircle remainingTime={time} />
      </OuterCircle>
      {type}'ss'
    </div>
  );
}
