import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageTitle: '',
  breadcrumbs: [],
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageInfo: (state, action) => {
      const { title, breadcrumbs } = action.payload;
      state.pageTitle = title;
      state.breadcrumbs = breadcrumbs;
    },
    resetPageInfo: (state) => {
      state.pageTitle = '';
      state.breadcrumbs = [];
    },
  },
});

export const { setPageInfo, resetPageInfo } = pageSlice.actions;
export default pageSlice.reducer;
