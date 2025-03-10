import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'all',
  activeRqiTab: 'sent',
  selectedNotification: null,
  isNotificationModalOpen: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    openNotificationModal: (state) => {
      state.isNotificationModalOpen = true;
    },
    closeNotificationModal: (state) => {
      state.isNotificationModalOpen = false;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setActiveRqiTab: (state, action) => {
      state.activeRqiTab = action.payload;
    },
    setSelectedNotification(state, action) {
      state.selectedNotification = action.payload;
    },
    resetNotification(state) {
      state.selectedNotification = null;
      state.isNotificationModalOpen = false;
    },
  },
});

export const {
  setActiveTab,
  setActiveRqiTab,
  resetNotification,
  openNotificationModal,
  closeNotificationModal,
  setSelectedNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;
