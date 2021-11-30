import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "../../Redux/counter/action";
import { logOutUser } from "../../Redux/users/action";

export default function HomePage() {
  const [value, setValue] = useState(1);

  const history = useHistory();
  const handleNavigation = () => history.push("/cart");
  const handleLoginNavigation = () => history.push("/login");

  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const { isRegister } = useSelector((state) => state.users);

  useEffect(() => {
    if (!isRegister) {
      history.push("/login");
    }
  }, [isRegister, history]);

  const handleLogoutNavigation = () => dispatch(logOutUser());
  const handleIncrement = () => dispatch(incrementNumber(value));
  const handleDecrement = () => dispatch(decrementNumber(value));

  return (
    <div>
      <h1> Home Cart </h1>
      <div>
        <button type="submit" onClick={handleIncrement}>
          Increment
        </button>
        <div style={{ fontSize: 20, margin: 20 }}>{count}</div>
        <button type="submit" onClick={handleDecrement}>
          Decrement
        </button>
        <br />
        <br />
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>

      <button
        style={{ marginTop: 20 }}
        type="submit"
        onClick={handleNavigation}
      >
        go to cart
      </button>
      <button
        style={{ marginTop: 20 }}
        type="submit"
        onClick={handleLoginNavigation}
      >
        go to Login
      </button>

      <button
        style={{ marginTop: 20 }}
        type="submit"
        onClick={handleLogoutNavigation}
      >
        logout
      </button>
    </div>
  );
}
