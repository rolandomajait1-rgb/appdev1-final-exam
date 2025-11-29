import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: JSON.parse(localStorage.getItem('todos')) || [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = { text: action.payload, completed: false };
      state.items.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
    toggleTodo: (state, action) => {
      const todo = state.items[action.payload];
      todo.completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
    deleteTodo: (state, action) => {
      state.items.splice(action.payload, 1);
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;