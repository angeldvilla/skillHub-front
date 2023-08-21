import { createSlice } from "@reduxjs/toolkit";
import {
  getUsers,
  getUsersByName,
  getUser,
  postUser,
} from "./usersHandler";

const storedCredentials = JSON.parse(localStorage.getItem("userCredentials"));

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  error: null,
  userCredentials: storedCredentials || null,
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLogin: (state, { payload }) => {
      state.userCredentials = payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    putUserInfo: (state, { payload }) => {
      state.user = payload
    },
    logoutUserSesion: (state) => {
      state.userCredentials = null
    },
  },
  extraReducers: (builder) => {
    builder

      // Get users
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })

      // Get users by name
      .addCase(getUsersByName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsersByName.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsersByName.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })

      // Get User
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })

      // Post User
      .addCase(postUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export const { userLogin, clearError, putUserInfo, logoutUserSesion } = userSlice.actions;
export default userSlice.reducer;
