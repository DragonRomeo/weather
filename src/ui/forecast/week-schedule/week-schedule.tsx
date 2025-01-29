import { FC } from 'react';
import WeatherBox from '../../weather-box/weather-box';
import { Box, Button } from '@mui/material';
import { IForecastday } from '../../../common/types/IWeather';
import WeekScheduleItem from './week-schedule-item/week-schedule-item';
import { styles } from './week-schedule.styles';

interface Props {
  weeks: Array<IForecastday>;
}

const WeekSchedule: FC<Props> = ({ weeks }) => {
  return (
    <WeatherBox>
      <Box sx={styles.week_container}>
        {weeks.map((day) => (
          <Button sx={styles.week_button} key={day.date}>
            <WeekScheduleItem
              date={day.date}
              icon={day.day.condition.icon}
              temperature={day.day.avgtemp_c}
            ></WeekScheduleItem>
          </Button>
        ))}
      </Box>
    </WeatherBox>
  );
};

export default WeekSchedule;
