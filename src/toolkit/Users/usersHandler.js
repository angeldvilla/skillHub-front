import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const { data } = await axios.get("http://localhost:3002/user");
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3002/user/${id}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const postUser = createAsyncThunk("users/postUser", async (userData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3002/user/register",
      userData
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
});


export const logoutUser = createAsyncThunk("users/logoutUser", async () => {
  localStorage.removeItem("userCredentials");
  return null;
});
