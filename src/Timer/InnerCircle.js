import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "200px",
    width: "200px",
    height: "200px",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    <Paper className={classes.root} elevation={10}>
      <Typography variant="h3" className={classes.center}>
        {minute}:{`${second}`.padStart(2, "0")}
      </Typography>
    </Paper>
  );
}

export default InnerCircle;
