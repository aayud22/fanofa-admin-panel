import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBanner: null,
  selectedAdvertise: null,
};

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setSelectedAdvertise(state, action) {
      state.selectedAdvertise = action.payload;
    },
    setSelectedBanner(state, action) {
      state.selectedBanner = action.payload;
    },

    resetAds(state) {
      state.selectedAdvertise = null;
      state.selectedBanner = null;
    },
  },
});

export const { setSelectedAdvertise, setSelectedBanner, resetAds } =
  adsSlice.actions;
export default adsSlice.reducer;
