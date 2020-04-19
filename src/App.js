import React from "react";
import Timer from "Timer";
import Pomodoro from "pomodoro";

function App() {
  return (
    <div className="App">
      <Pomodoro minute={20} second={10} />
    </div>
  );
}

export default App;
