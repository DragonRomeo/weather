import { FC, useState } from 'react';
import WeatherBox from '../../weather-box/weather-box';
import { Box } from '@mui/material';
import { IForecastday } from '../../../common/types/IWeather';
import WeekScheduleItem from './week-schedule-item/week-schedule-item';
import { styles } from './week-schedule.styles';

interface Props {
  weeks: Array<IForecastday>;
  callback?: (index: number) => void;
}

const WeekSchedule: FC<Props> = ({ weeks, callback }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    callback && callback(index);
  };

  return (
    <WeatherBox>
      <Box sx={styles.week_container}>
        {weeks.map((day, index) => (
          <WeekScheduleItem
            key={day.date}
            date={day.date}
            icon={day.day.condition.icon}
            temperature={day.day.avgtemp_c}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
          ></WeekScheduleItem>
        ))}
      </Box>
    </WeatherBox>
  );
};

export default WeekSchedule;
