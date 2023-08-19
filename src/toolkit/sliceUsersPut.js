import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isLoading: false,
  error: null,
  habilitado: {}
};
export const sliceUsers = createSlice({
  name: "users",
  initialState,
  reducers: {
    putUsers: (state, { payload }) => {
      state.habilitado = payload;
    },
  },
  
});

export const { putUsers } = sliceUsers.actions;
