import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './reducers/reducers'

const store = configureStore({
  reducer: {
    todosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
