import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "../../Redux/counter/action";

export default function CartIncrement() {
  const [value, setValue] = useState(1);

  const history = useHistory();
  const handleBack = () => history.push("/");

  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const handleIncrement = () => dispatch(incrementNumber(value));
  const handleDecrement = () => dispatch(decrementNumber(value));

  return (
    <div>
      <h1> Cart </h1>
      <div>
        <button type="submit" onClick={handleIncrement}>
          Increment
        </button>
        <div style={{ color: "pink", fontSize: 20, margin: 20 }}>{count}</div>
        <button type="submit" onClick={handleDecrement}>
          Decrement
        </button>
        <br />
        <br />
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <button style={{ marginTop: 20 }} type="submit" onClick={handleBack}>
        go back
      </button>
    </div>
  );
}
