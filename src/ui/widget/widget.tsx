import React from 'react';
import { IWeather } from '../../common/types/IWeather';
import Temperature from './temperature/temperature';
import City from './city/city';
import WeatherIcon from './weatherIcon/weather-icon';
import { Typography } from '@mui/material';
import { temperatureFontSize } from '../common/styles/consts';
import DateContainer from './date-container/date-container';

type Props = {
  weather: IWeather | undefined;
};

const Widget: React.FC<Props> = ({ weather }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {weather && (
        <>
          <Typography variant='h1' fontSize={temperatureFontSize}>
            <Temperature
              currentTemperature={Math.trunc(weather.current.temp_c)}
            />
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant='h3'>
              <City cityName={weather.location.name} />
              <DateContainer />
            </Typography>
          </div>
          <WeatherIcon icon={weather.current.condition.icon} />
        </>
      )}
    </div>
  );
};

export default Widget;
