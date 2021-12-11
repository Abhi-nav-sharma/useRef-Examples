import { useRef } from "react";

export default function Container() {
  const ref = useRef(null);

  return (
    <>
      <button
        onClick={() => {
          ref.current.scrollTop = 0;
        }}
      >
        Scroll To Top
      </button>
      <button
        onClick={() => {
          ref.current.scrollTop = ref.current.scrollHeight;
        }}
      >
        Scroll To Bottom
      </button>
      <div
        ref={ref}
        style={{
          maxHeight: "200px",
          width: "200px",
          border: "1px solid black",
          overflow: "scroll",
          padding: 20
        }}
      >
        <div
          style={{
            border: "5px solid black",
            height: "1024px"
          }}
        ></div>
      </div>
    </>
  );
}
