import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWeather } from '../common/types/IWeather';
import {
  API_KEY,
  BASE_URL,
  DAYS,
  lang,
  METHOD,
} from './weather-service.consts';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<IWeather, string>({
      query: (city) =>
        `${METHOD}?key=${API_KEY}&q=${city}&lang=${lang}&days=${DAYS}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherAPI;
