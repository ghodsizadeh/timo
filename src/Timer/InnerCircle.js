import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "200px",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // bottom: 0,
    // right: 0,
    top: 15,
    left: 15,
  },
  center: {},
}));

type Props = {
  remainingTime: number,
};
function InnerCircle(props: Props) {
  const classes = useStyles();

  const { remainingTime } = props;
  const minute = parseInt(remainingTime / 60);
  const second = remainingTime % 60;
  return (
    <Paper className={classes.root} elevation={14}>
      <Typography variant="h3" className={classes.center}>
        {minute}:{`${second.toFixed()}`.padStart(2, "0")}
      </Typography>
    </Paper>
  );
}

export default InnerCircle;
