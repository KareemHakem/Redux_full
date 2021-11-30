import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Redux/users/action";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const handleRegisterNavigation = () => history.push("/register");

  const dispatch = useDispatch();
  const { isRegister } = useSelector((state) => state.users);

  useEffect(() => {
    if (isRegister) {
      history.push("/");
    }
  }, [isRegister, history]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const value = { email, password };
    dispatch(loginUser(value));
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Login </button>
      </form>
      <button
        style={{ marginTop: 20 }}
        type="submit"
        onClick={handleRegisterNavigation}
      >
        go to Register
      </button>
    </div>
  );
}
