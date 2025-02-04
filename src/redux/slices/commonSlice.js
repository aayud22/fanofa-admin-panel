import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCollapsed: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isCollapsed = !state.isCollapsed;
    },
    setSidebarState(state, action) {
      state.isCollapsed = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebarState } = commonSlice.actions;

export default commonSlice.reducer;
