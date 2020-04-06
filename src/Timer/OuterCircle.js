// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ReactMinimalPieChart from "react-minimal-pie-chart";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    width: "230px",
    height: "230px",
    borderRadius: "230px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const COLORS = {
  focus: {
    fill: "#C13C37",
    blank: "#f0efed",
  },
  shortBreak: {
    fill: "#196333",
    blank: "#f0efed",
  },
  longBreak: {
    fill: "#003c7d",
    blank: "#f0efed",
  },
};
type Props = {
  children: React.Node,
  total_time: number,
  remaining_time: number,
  kind: "shortBreak" | "longBreak" | "focus",
};

export default function OutterCircle(props: Props) {
  const { children, total_time, remaining_time } = props;
  const kind = props.kind || "shortBreak";
  const classes = useStyles();
  // console.log("hello", kind, COLORS);

  const { [kind]: color } = COLORS;
  const value = (1 - remaining_time / total_time) * 100;

  return (
    <Paper
      elevation={3}
      className={classes.root}
      style={{
        backgroundColor: `hsl(300,50%,${value}%)`,
      }}
    >
      <ReactMinimalPieChart
        // className={classes.root}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={[
          {
            color: color.fill,
            title: "One",
            value: value,
          },
          {
            color: color.blank,
            title: "Two",
            value: 100 - value,
          },
        ]}
        // label={children}
        labelPosition={0}
        lengthAngle={360}
        lineWidth={13}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={50}
        rounded
        startAngle={-90}
        viewBoxSize={[100, 100]}
      >
        {children}
      </ReactMinimalPieChart>
    </Paper>
  );
}
