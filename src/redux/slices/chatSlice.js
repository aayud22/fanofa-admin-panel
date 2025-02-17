import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedChatUser: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setSelectedChatUser: (state, action) => {
      state.selectedChatUser = action.payload;
    },
    clearSelectedChatUser: (state) => {
      state.selectedChatUser = null;
    },
  },
});

export const { setSelectedChatUser, clearSelectedChatUser } = chatSlice.actions;
export default chatSlice.reducer;
