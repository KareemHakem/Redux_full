import { type } from "./type";

const loginUser = (value) => {
  return { type: type.LOGIN_USER, payload: value };
};

const registerUser = (value) => {
  return { type: type.REGISTER_USER, payload: value };
};

const logOutUser = () => {
  return { type: type.LOGOUT_USER };
};

export { logOutUser, loginUser, registerUser };
