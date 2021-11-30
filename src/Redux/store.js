import { createStore, applyMiddleware } from "redux";

// import {persistStore} from 'redux-persist'
import logger from "redux-logger";

import RootReducer from "./rootReducer";

const middleWare = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middleWare));
