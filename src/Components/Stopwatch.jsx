import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
  const [state, setState] = useState(0);
  const timerRef = useRef(null);
  const startTimer = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000);
    }
  };
  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    startTimer();
    return () => {
      resetTimer();
    };
  }, []);
  const resetTimer = () => {
    pauseTimer();
    setState(0);
  };
  console.log(timerRef.current);
  console.log(state);
  return (
    <>
      <h1>Stopwatch</h1>
      <h2>{state}</h2>
      <button disabled={timerRef.current} onClick={startTimer}>
        Start
      </button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      <br />
      <br />
    </>
  );
}
