import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos, createTodo, updateTodo, deleteTodo as deleteTodoAPI } from '../../utils/todosAPI';

export const fetchTodosAsync = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetchTodos();
    return response.data;
  }
);

export const addTodoAsync = createAsyncThunk(
  'todos/addTodo',
  async (todoText) => {
    const todo = { title: todoText, completed: false, userId: 1 };
    const response = await createTodo(todo);
    return response.data;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  'todos/toggleTodo',
  async ({ id, completed }) => {
    const response = await updateTodo(id, { completed });
    return response.data;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  'todos/deleteTodo',
  async (id) => {
    await deleteTodoAPI(id);
    return id;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;