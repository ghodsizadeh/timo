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
  const totalSecond = useRef(minute * 60 + second);
  const [time, setTime] = useState(totalSecond.current);
  const interval = useRef(null);
  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setTime((time) => time - 0.0125);
    }, 12.5);

    return () => {
      clearInterval(interval.current);
    };
  }, [minute]);
  useEffect(() => {
    totalSecond.current = minute * 60 - 1;
    setTime(totalSecond.current);
    console.log("i change the minute");
  }, [minute]);

  useEffect(() => {
    if (time <= 0.0126) {
      timerStopHanlder();
    }
  }, [time]);

  return (
    <div>
      <OuterCircle
        total_time={totalSecond.current}
        remaining_time={time}
        kind={kind}
      >
        <InnerCircle remainingTime={time} />
      </OuterCircle>
    </div>
  );

  function timerStopHanlder() {
    setTime(0);
    clearInterval(interval.current);
  }
}
