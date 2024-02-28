import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: null,
  score: null
}

export const sliceReviews = createSlice({
  name: 'score',
  initialState,
  reducers: {
    sendScore: (state, { payload }) => {
      state.score = payload
    }
  }
})

export const { sendScore } = sliceReviews.actions
