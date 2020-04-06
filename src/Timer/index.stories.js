import React from "react";
import Timer from "./index";
import InnerCircle from "./InnerCircle";

export default {
  component: Timer,
  title: "Timer",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const TimeData = {
  minute: 0,
  second: 4,
};

export const Focus = () => <Timer {...TimeData} kind="focus" />;
export const shortBreak = () => <Timer {...TimeData} kind="shortBreak" />;
export const longBreak = () => <Timer {...TimeData} kind="longBreak" />;

export const Inside = () => (InnerCircle) => <InnerCircle {...TimeData} />;
