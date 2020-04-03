// @flow
import React, { useState, useEffect } from "react";
import InnerCircle from "./InnerCircle";
import useInterval from "components/useInterval";

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
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <InnerCircle remainingTime={time} />
      {type}'ss'
    </div>
  );
}
