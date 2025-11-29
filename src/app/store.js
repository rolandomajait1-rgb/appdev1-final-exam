import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';
import themeReducer from '../features/todos/themeSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});