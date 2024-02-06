import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result={false} />
      <section className="challenge">
        <h2>{title}</h2>
        <p>
          {targetTime} second {targetTime >= 1 ? "" : "s"}
        </p>
        <p>
          <button onClick={handleStart}>
            {timerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : null}>
          {timerStarted ? "Time is running" : "Time inactive"}
        </p>
      </section>
    </>
  );
}
