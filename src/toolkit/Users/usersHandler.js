import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:3002/user" // "https://skillhub-back-production.up.railway.app/user"
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3002/user/${id}` // "https://skillhub-back-production.up.railway.app/user"
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getUsersByName = createAsyncThunk(
  "users/getUsersByName",
  async (name) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3002/user?name=${name}`
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const postUser = createAsyncThunk("users/postUser", async (userData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3001/user/register",
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


export const Payment = createAsyncThunk("users/Payment", async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/payment");
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
