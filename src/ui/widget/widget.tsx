import React from 'react';
import { IWeather } from '../../common/types/IWeather';
import Temperature from './temperature/temperature';
import City from './city/city';
import WeatherIcon from './weather-icon/weather-icon';
import { styled, Typography } from '@mui/material';
import { temperatureFontSize } from '../../common/styles/consts';
import DateContainer from './date-container/date-container';
import { widgetConsts } from './widget.consts';

type Props = {
  weather: IWeather | undefined;
};

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: widgetConsts.gap,
  marginLeft: widgetConsts.marginLeft,
});

const Widget: React.FC<Props> = ({ weather }) => {
  return (
    <Wrapper>
      {weather && (
        <>
          <Typography variant='h1' fontSize={temperatureFontSize}>
            <Temperature
              currentTemperature={Math.round(weather.current.temp_c)}
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
    </Wrapper>
  );
};

export default Widget;
