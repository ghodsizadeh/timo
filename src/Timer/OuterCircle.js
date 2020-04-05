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
    blank: "#C13C37",
  },
};
type Props = {
  children: React.Node,
  total_time: number,
  remaning_time: number,
};

export default function OutterCircle(props: Props) {
  const { children, total_time, remaning_time } = props;
  const classes = useStyles();

  // const background = `linear-gradient( -90deg,Green 0% Green 30%, white 30%)`;
  const value = (1 - remaning_time / total_time) * 100;
  const background = `linear-gradient(to right, transparent 50%, yellow  0`;
  // console.log("hello", value, 100 - value);

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
            color: "#E38627",
            title: "One",
            value: value,
          },
          {
            color: "#C13C37",
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
