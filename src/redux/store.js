/** @format */

import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./user.slice";

const reducer = {
  users:userReducer,
};

const store = configureStore({
  reducer,
});

export default store;
