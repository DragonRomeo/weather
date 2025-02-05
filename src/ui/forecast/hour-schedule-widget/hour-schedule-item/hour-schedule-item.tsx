import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { styles } from './hour-schedule-item.styles';
import { weekItemHoverBg } from '../../week-schedule/week-schedule-item/week-schedule-item.consts';
import WeatherIcon from '../../../widget/weather-icon/weather-icon';
import Temperature from '../../../widget/temperature/temperature';

interface Props {
  time: number;
  temperature: number;
  icon: string;
  weatherStatus?: string;
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
          <Typography variant='subtitle1'>{`${time}:00`}</Typography>
          <WeatherIcon width='40px' height='40px' icon={icon} />
          {weatherStatus && (
            <Box sx={styles.status_container}>
              <Typography>{weatherStatus}</Typography>
            </Box>
          )}
        </Box>
        <Typography variant='h6'>
          <Temperature>{temperature}</Temperature>
        </Typography>
      </Box>
    </Button>
  );
};

export default HourScheduleItem;
