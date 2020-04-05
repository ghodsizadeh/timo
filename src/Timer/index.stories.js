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
  minute: 1,
  second: 13,
};

export const Focus = () => <Timer {...TimeData} type="focus" />;
export const shortBreak = () => <Timer {...TimeData} type="shortBreak" />;

export const Inside = () => (InnerCircle) => <InnerCircle {...TimeData} />;
