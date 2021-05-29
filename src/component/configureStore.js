import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

let configure = () => {
  return configureStore({ reducer });
};
export default configure;
