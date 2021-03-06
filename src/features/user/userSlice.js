import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
