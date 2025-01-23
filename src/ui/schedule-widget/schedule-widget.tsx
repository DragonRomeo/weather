import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { IForecastday } from '../../common/types/IWeather';
import ScheduleItem from './schedule-item/schedule-item';
import { getHour, getHoursAfterCurrent } from './schedule-widget.helpers';
import { curLabel } from '../../common/lang/lang';
import { styles } from './schedule-widget.styles';

interface Props {
  schedule: Array<IForecastday>;
}

const ScheduleWidget: FC<Props> = ({ schedule }) => {
  const filteredSchedule = getHoursAfterCurrent(schedule);
  return (
    <Box component='div' sx={styles.box_container}>
      <Box sx={styles.title_wrapper}>
        <Typography variant='subtitle1'>
          {curLabel.ScheduleWidget.TITLE}
        </Typography>
      </Box>
      {filteredSchedule.map((hour, index) => (
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

export default ScheduleWidget;
