import { configureStore } from '@reduxjs/toolkit'

import { workSlice } from './slice'
import { WorkPublicationSlice } from './sliceWorkPublication'
import userReducer from './Users/usersSlice'
import { sliceReviews } from './sliceReviews'
import { sliceUsers } from './sliceUsersPut'

export const store = configureStore({
  reducer: {
    work: workSlice.reducer,
    formwork: WorkPublicationSlice.reducer,
    users: userReducer,
    score: sliceReviews.reducer,
    habilitado: sliceUsers.reducer
  }
})
