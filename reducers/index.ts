import { combineReducers } from "@reduxjs/toolkit";
// import ercTokens from "./tokens";
import user from "./user";
import common from "./common";
import inventory from "./inventory";

const rootReducer = combineReducers({
  common,
  user,
  inventory,
});

export default rootReducer;
