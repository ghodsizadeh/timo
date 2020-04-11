import React from "react";
import Pomodoro from "./index";

export default {
  component: Pomodoro,
  title: "Pomodoro",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const TimeData = {
  minute: 0,
  second: 4,
};

export const Focus = () => <Pomodoro {...TimeData} />;
// export const shortBreak = () => <Timer {...TimeData} kind="shortBreak" />;
// export const longBreak = () => <Timer {...TimeData} kind="longBreak" />;

// export const Inside = () => (InnerCircle) => <InnerCircle {...TimeData} />;
