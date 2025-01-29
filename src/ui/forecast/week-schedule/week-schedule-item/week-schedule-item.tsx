import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import WeatherIcon from '../../../widget/weather-icon/weather-icon';
import Temperature from '../../../widget/temperature/temperature';

import { getDayOfTheWeek } from './week-schedule-item.helpers';
import { styles } from './week-schedule-item.styles';

interface Props {
  date: string;
  icon: string;
  temperature: number;
}

const WeekScheduleItem: FC<Props> = ({ date, icon, temperature }) => {
  return (
    <Box sx={styles.item_container}>
      <Typography>{getDayOfTheWeek(date)}</Typography>
      <Box sx={styles.item_weather_container}>
        <WeatherIcon icon={icon} width='46px' height='46x'></WeatherIcon>
        <Temperature>{temperature}</Temperature>
      </Box>
    </Box>
  );
};

export default WeekScheduleItem;
