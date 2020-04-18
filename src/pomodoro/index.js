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
  focus: {
    backgroundColor: "#af0812",
    margin: "10px",
  },
  buttons: {
    paddingTop: "300px",
    margin: "10px",
    display: "flex",
  },
}));

type toggleProps = {
  title: string,
  handler: () => void,
  className: {},
};

type kinds = "focus" | "shortBreak" | "longBreak";
export default function Pomodoro() {
  const classes = useStyles();
  const [kind: kinds, setKind] = useState("focus");
  const [time: number, setTime] = useState(1);
  return (
    <Paper elevation={10} className={classes.root}>
      <div style={{ paddingLeft: "80px", paddingTop: "30px" }}>
        <Timer minute={time} kind={kind} />
      </div>
      <div className={classes.buttons}>
        <ToggleButton
          className={classes.focus}
          title="focus"
          handler={handleFocus}
        />
        <ToggleButton
          className={classes.focus}
          title="break"
          handler={handleBreak}
        />
        <ToggleButton
          className={classes.focus}
          title="long break"
          handler={handleLongBreak}
        />
      </div>
    </Paper>
  );

  function ToggleButton(props: toggleProps) {
    const { handler, title, className } = props;
    return (
      <Button
        className={className}
        variant="contained"
        color="inherit"
        onClick={handler}
      >
        {title}
      </Button>
    );
  }

  function handleFocus() {
    setKind("focus");
    setTime(25);
  }
  function handleBreak() {
    setKind("shortBreak");
    setTime(5);
  }
  function handleLongBreak() {
    setKind("longBreak");
    setTime(15);
  }
}
