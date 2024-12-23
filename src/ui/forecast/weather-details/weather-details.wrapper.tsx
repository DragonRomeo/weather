import React from 'react';
import WeatherDetails from './weather-details';
import { useSelector } from 'react-redux';
import { useGetWeatherQuery } from '../../../services/weather-service';
import { IRootState } from '../../../common/types/store';

const WeatherDetailWrapper = () => {
  //This is copypaste from widget.container. Its' should be only in one file.
  //TODO: put this copypaste in a separate code
  const city = useSelector((state: IRootState) => state.city.name);
  const { data } = useGetWeatherQuery(city);
  return (
    <>
      <WeatherDetails weather={data} />
    </>
  );
};

export default WeatherDetailWrapper;
