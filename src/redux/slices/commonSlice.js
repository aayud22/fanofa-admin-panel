import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed: false, // Sidebar state
  role: null, // Selected role
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isCollapsed = !state.isCollapsed;
    },
    setSidebarState(state, action) {
      state.isCollapsed = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
    clearCommonData(state) { // Generic function
      state.role = null;
      state.isCollapsed = false; // Reset other common state variables if needed
    },
  },
});

export const { toggleSidebar, setSidebarState, setRole, clearCommonData } = commonSlice.actions;

export default commonSlice.reducer;
