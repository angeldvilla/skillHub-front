import { configureStore } from '@reduxjs/toolkit'
import { workSlice } from './slice'

export const store = configureStore({
  reducer: {
    work:workSlice.reducer,
  },
})