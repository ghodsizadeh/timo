import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Timer from "Timer";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "400px",
    height: "600px",
    borderRadius: "30px",
    // backgroundColor: "red",
  },
}));

type kinds = "focus" | "shortBreak" | "longBreak";
export default function Pomodoro() {
  const classes = useStyles();
  const [kind: kinds, setKind] = useState("focus");
  return (
    <Paper elevation={10} className={classes.root}>
      <div style={{ paddingLeft: "70px", paddingTop: "30px" }}>
        <Timer minute={1} kind={kind} />
      </div>
      <Button variant="contained" onClick={handleKindClick}>
        Hello
      </Button>
    </Paper>
  );
  function handleKindClick() {
    if (kind === "focus") {
      setKind("shortBreak");
    } else if (kind === "shortBreak") {
      setKind("focus");
    }
  }
}
