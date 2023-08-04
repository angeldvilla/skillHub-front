import { configureStore } from '@reduxjs/toolkit'
import { workSlice } from './slice'
import { WorkPublicationSlice } from './sliceWorkPublication'

export const store = configureStore({
  reducer: {
    work:workSlice.reducer,
    formwork: WorkPublicationSlice.reducer
  },
})