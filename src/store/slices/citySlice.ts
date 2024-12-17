import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    //TODO: get 1t value from local storage if this empty use Voronezh instead
    name: 'Voronezh',
  },
  reducers: {
    putCity: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { putCity } = citySlice.actions;

export default citySlice.reducer;
