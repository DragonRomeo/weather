import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import WeatherIcon from '../../widget/weather-icon/weather-icon';
import Temperature from '../../widget/temperature/temperature';
import { styles } from './hour-schedule-item.styles';
import { weekItemHoverBg } from '../../forecast/week-schedule/week-schedule-item/week-schedule-item.consts';

interface Props {
  time: number;
  temperature: number;
  icon: string;
  weatherStatus: string;
  selected?: boolean;
  onClick?: () => void;
}

const HourScheduleItem: FC<Props> = ({
  time,
  temperature,
  icon,
  weatherStatus,
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
    </Button>
  );
};

export default HourScheduleItem;
