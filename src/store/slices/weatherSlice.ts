import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IHour, IWeather } from '../../common/types/IWeather';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    // weatherData is unused
    weatherData: {} as IWeather,
    dayOfTheWeek: 0,
    weatherHour: null as IHour | null,
  },
  reducers: {
    putWeather: (state, action: PayloadAction<IWeather>) => {
      state.weatherData = action.payload;
    },
    putDayOfWeek: (state, action: PayloadAction<number>) => {
      state.dayOfTheWeek = action.payload;
    },
    putWeatherHourInfo: (state, action: PayloadAction<IHour>) => {
      state.weatherHour = action.payload;
    },
  },
});

export const { putWeather, putDayOfWeek, putWeatherHourInfo } =
  weatherSlice.actions;

export default weatherSlice.reducer;
