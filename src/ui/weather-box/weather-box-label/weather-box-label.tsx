import React, { FC } from 'react';
import WeatherBox from '../weather-box';
import { Box, Typography } from '@mui/material';
import { styles } from './weather-box-label.styles';

interface Props {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const WeatherBoxLabel: FC<Props> = ({ icon, title, children }) => {
  return (
    <WeatherBox>
      <Box sx={styles.weather_label_container}>
        <Box sx={styles.weather_label_title_container}>
          {icon}
          <Typography>{title}</Typography>
        </Box>
        {children}
      </Box>
    </WeatherBox>
  );
};

export default WeatherBoxLabel;
