import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    current: localStorage.getItem('savedTheme') || 'standard',
  },
  reducers: {
    changeTheme: (state, action) => {
      state.current = action.payload;
      localStorage.setItem('savedTheme', action.payload);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;