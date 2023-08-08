import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUser, postUser, userLogin } from "./usersHandler";

const initialState = {
  users: [],
  user: {},
  isLoading: false,
  error: null,
  accessToken: null,
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
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
      })

      // Login User
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.accessToken = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export default userSlice.reducer;
