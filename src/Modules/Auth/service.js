import axios from "axios";
import { server_url } from "../../constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAPI = createAsyncThunk("auth/login", async (data) => {
  try {
    console.log(data);
    const response = await axios.post(`${server_url}/admin/login`, data);
    return response.data;
  } catch (error) {
    console.log("this is error", error.response?.data);
    throw error.response?.data;
  }
});
