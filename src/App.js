import Stopwatch from "./Components/Stopwatch";
import "./styles.css";
import { useState } from "react";
import Container from "./Components/Container";
import Form from "./Components/Form";

export default function App() {
  const [showStopwatch, setshowStopwatch] = useState(true);
  return (
    <div className="App">
      {showStopwatch && <Stopwatch />}
      {showStopwatch && (
        <button
          onClick={() => {
            setshowStopwatch(!showStopwatch);
          }}
        >
          Hide Stopwatch
        </button>
      )}
      {!showStopwatch && (
        <button
          onClick={() => {
            setshowStopwatch(!showStopwatch);
          }}
        >
          Show Stopwatch
        </button>
      )}
      <hr />
      <hr />
      <Container />
      <hr />
      <hr />
      <Form />
    </div>
  );
}
