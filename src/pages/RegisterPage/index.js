import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../Redux/users/action";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { isRegister } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegister) {
      history.push("/");
    }
  }, [isRegister, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = { name, email, password };
    dispatch(registerUser(value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Eamil"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Register </button>
      </form>
    </div>
  );
}
