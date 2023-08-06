import { createSlice } from "@reduxjs/toolkit";
import { getUsers, postUser } from "./usersHandler";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
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

export default userSlice.reducer;
