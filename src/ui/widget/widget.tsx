import React from 'react';
import { IWeather } from '../../common/types/IWeather';
import Temperature from './temperature/temperature';
import City from './city/city';
import WeatherIcon from './weather-icon/weather-icon';
import { Box, Typography } from '@mui/material';
import { styles } from './widget.styles';
import { curLabel } from '../../common/lang/lang';

type Props = {
  weather: IWeather | undefined;
};

const Widget: React.FC<Props> = ({ weather }) => {
  return (
    <Box sx={styles.widget_wrapper}>
      {weather && (
        <>
          <Typography variant='h1' sx={styles.current_temperature_typography}>
            <Temperature>{weather.current.temp_c}</Temperature>
          </Typography>
          <Box sx={styles.info_container}>
            <Typography variant='h3' sx={styles.city_typography}>
              <City cityName={weather.location.name} />
            </Typography>
            <Typography sx={styles.weather_status_typography}>
              {weather.current.condition.text}
            </Typography>
            <Typography sx={styles.feels_like_typography}>
              {curLabel.Widget.feelsLike}
              <Temperature>{weather.current.feelslike_c}</Temperature>
            </Typography>
          </Box>
          <WeatherIcon icon={weather.current.condition.icon} />
        </>
      )}
    </Box>
  );
};

export default Widget;
