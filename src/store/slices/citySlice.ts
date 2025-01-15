import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const defaultCity = 'Voronezh';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    name: defaultCity,
  },
  reducers: {
    putCity: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { putCity } = citySlice.actions;

export default citySlice.reducer;
