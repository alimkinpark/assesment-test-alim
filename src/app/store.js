import { configureStore } from '@reduxjs/toolkit'
import repoReducer from '../features/repo/repoSlice'

export default configureStore({
  reducer: {
    repo: repoReducer,
  },
})