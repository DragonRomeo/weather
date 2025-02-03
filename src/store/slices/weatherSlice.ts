import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IWeather } from '../../common/types/IWeather';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: {} as IWeather,
    dayOfTheWeek: 0,
  },
  reducers: {
    getWeather: (state, action: PayloadAction<IWeather>) => {
      state.weatherData = action.payload;
    },
    putDayOfWeek: (state, action: PayloadAction<number>) => {
      state.dayOfTheWeek = action.payload;
    },
  },
});

export const { getWeather, putDayOfWeek } = weatherSlice.actions;

export default weatherSlice.reducer;
