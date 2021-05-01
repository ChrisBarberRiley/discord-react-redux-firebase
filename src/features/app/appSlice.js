import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId: null,
  channelName: null,
  boardId: null,
  boardName: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelInfo(state, action) {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
    setBoardId(state, action) {
      state.boardId = action.payload.boardId;
    },
    setBoardName(state, action) {
      state.boardName = action.payload.boardName;
    },
  },
});

export const { setChannelInfo, setBoardId, setBoardName } = appSlice.actions;
export const selectBoardName = (state) => state.app.boardName;
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;
export default appSlice.reducer;
