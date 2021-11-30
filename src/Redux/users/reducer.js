import { type } from "./type";

const initialState = {
  isRegister: false,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_USER:
      return {
        isRegister: true,
        user: action.payload,
      };

    case type.REGISTER_USER:
      return {
        isRegister: true,
        user: action.payload,
      };
    case type.LOGOUT_USER:
      return {
        isRegister: false,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
