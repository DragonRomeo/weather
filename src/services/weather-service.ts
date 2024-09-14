import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWeather } from '../common/types/IWeather';

const BASE_URL = 'https://api.weatherapi.com/v1/';
const API_KEY = '19d22d45066d4d1589b124006241209';
const METHOD = 'current.json';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<IWeather, string>({
      query: (city) => `${METHOD}?key=${API_KEY}&q=${city}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherAPI;
