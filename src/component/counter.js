import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  let dispatch = useDispatch();
  let count = useSelector((store) => store.value);
  return (
    <div className="main">
      <h2>Redux Counter</h2>
      <main className="hero">
        <h1 className="value">{count}</h1>
        <span className="btn dec" onClick={() => {
               count < 1
              ? alert(`Value can't be negative `)
              : dispatch({ type: "counter/decremented" });
          }}
        >
          −
        </span>
        <span
          className="btn inc"
          onClick={() => dispatch({ type: "counter/incremented" })}
        >
          +
        </span>
      </main>
      <div className="btnC">
        <span
          className="btnReset"
          onClick={() => dispatch({ type: "counter/reset" })}
        >
          Reset
        </span>
      </div>
    </div>
  );
};

export default Counter;
