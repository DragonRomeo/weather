import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import WeatherIcon from '../../../widget/weather-icon/weather-icon';
import Temperature from '../../../widget/temperature/temperature';
import { getDayOfTheWeek } from './week-schedule-item.helpers';
import { styles } from './week-schedule-item.styles';
import { weekItemHoverBg } from './week-schedule-item.consts';

interface Props {
  date: string;
  icon: string;
  temperature: number;
  selected?: boolean;
  onClick?: () => void;
}

const WeekScheduleItem: FC<Props> = ({
  date,
  icon,
  temperature,
  selected = false,
  onClick,
}) => {
  return (
    <Button
      sx={Object.assign({}, styles.week_button, {
        backgroundColor: selected ? weekItemHoverBg : 'inherit',
      })}
      onClick={onClick}
    >
      <Box sx={styles.item_container}>
        <Typography>{getDayOfTheWeek(date)}</Typography>
        <Box sx={styles.item_weather_container}>
          <WeatherIcon icon={icon} width='46px' height='46x'></WeatherIcon>
          <Temperature>{temperature}</Temperature>
        </Box>
      </Box>
    </Button>
  );
};

export default WeekScheduleItem;
