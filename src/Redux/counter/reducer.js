import { type } from "./type";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.INCREMENT_COUNTER:
      return {
        count: state.count + Number(action.payload),
      };
    case type.DECREMENT_COUNTER:
      return {
        count: state.count - Number(action.payload),
      };
    default:
      return state;
  }
};

export default countReducer;
