import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import WeatherIcon from '../../widget/weather-icon/weather-icon';
import Temperature from '../../widget/temperature/temperature';
import { styles } from './schedule-item.styles';

interface Props {
  time: number;
  temperature: number;
  icon: string;
  weatherStatus: string;
}

const ScheduleItem: FC<Props> = ({
  time,
  temperature,
  icon,
  weatherStatus,
}) => {
  return (
    <Box sx={styles.main_container}>
      <Box sx={styles.content_wrapper}>
        <WeatherIcon icon={icon} />
        <Box sx={styles.status_container}>
          <Typography variant='body1'>{`${time}:00`}</Typography>
          <Typography>{weatherStatus}</Typography>
        </Box>
      </Box>
      <Typography variant='h6'>
        <Temperature>{temperature}</Temperature>
      </Typography>
    </Box>
  );
};

export default ScheduleItem;
