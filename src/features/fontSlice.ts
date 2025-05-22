import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FontState {
  selectedFont: string;
}

const initialState: FontState = {
  selectedFont: localStorage.getItem('selectedFont') || 'sans',
};

export const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    setFont: (state, action: PayloadAction<string>) => {
      state.selectedFont = action.payload;
    },
  },
});

export const { setFont } = fontSlice.actions;
export default fontSlice.reducer;
