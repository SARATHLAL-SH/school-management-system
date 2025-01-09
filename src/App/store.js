import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Modules/Auth/reducers/authSlice";
import { setupAxiosInterceptors } from "../services/axiosInstance";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

setupAxiosInterceptors(store);

export default store;
