import { type } from "./type";

const incrementNumber = (value) => {
  return { type: type.INCREMENT_COUNTER, payload: value };
};

const decrementNumber = (value) => {
  return { type: type.DECREMENT_COUNTER, payload: value };
};

export { incrementNumber, decrementNumber };
