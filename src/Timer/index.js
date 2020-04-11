// @flow
import React, { useState, useEffect, useRef } from "react";
import InnerCircle from "./InnerCircle";

import OuterCircle from "./OuterCircle";
type Props = {
  minute: number,
  second: number,
  kind: "focus" | "shortBreak" | "longBreak",
};
export default function Timer(props: Props) {
  const { minute, kind } = props;
  const second = props.second || 0;
  const totalSecond: number = minute * 60 + second;
  const [time, setTime] = useState(totalSecond);
  const interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      setTime((time) => time - 0.0125);
    }, 12.5);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  useEffect(() => {
    if (time <= 0.0126) {
      timerStopHanlder();
    }
  }, [time]);

  return (
    <div>
      <OuterCircle total_time={totalSecond} remaining_time={time} kind={kind}>
        <InnerCircle remainingTime={time} />
      </OuterCircle>
    </div>
  );

  function timerStopHanlder() {
    setTime(0);
    clearInterval(interval.current);
  }
}
