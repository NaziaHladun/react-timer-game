import React, { useState } from "react";
import TimeChallenge from "./components/TimeChallenge.jsx";

import Player from "./components/Player.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={1} />
        <TimeChallenge title="Normal" targetTime={5} />
        <TimeChallenge title="Getting tough" targetTime={10} />
        <TimeChallenge title="Pro only" targetTime={16} />
      </div>
    </>
  );
}

export default App;
