import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IWeather } from '../../common/types/IWeather';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: {} as IWeather,
  },
  reducers: {
    getWeather: (state, action: PayloadAction<IWeather>) => {
      state.weatherData = action.payload;
    },
  },
});

export const { getWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
