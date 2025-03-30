import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlise';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
