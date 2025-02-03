import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { IForecastday } from '../../common/types/IWeather';
import ScheduleItem from './hour-schedule-item/hour-schedule-item';
import { getHour } from './hour-schedule-widget.helpers';
import { curLabel } from '../../common/lang/lang';
import { styles } from './hour-schedule-widget.styles';

interface Props {
  schedule: IForecastday['hour'];
}

const HourScheduleWidget: FC<Props> = ({ schedule }) => {
  return (
    <Box component='div' sx={styles.box_container}>
      <Box sx={styles.title_wrapper}>
        <Typography variant='subtitle1'>
          {curLabel.ScheduleWidget.TITLE}
        </Typography>
      </Box>
      {schedule.map((hour, index) => (
        <ScheduleItem
          key={index}
          time={getHour(hour.time)}
          temperature={hour.temp_c}
          icon={hour.condition.icon}
          weatherStatus={hour.condition.text}
        />
      ))}
    </Box>
  );
};

export default HourScheduleWidget;
