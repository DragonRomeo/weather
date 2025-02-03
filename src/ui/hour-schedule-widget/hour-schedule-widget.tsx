import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { IForecastday } from '../../common/types/IWeather';
import HourScheduleItem from './hour-schedule-item/hour-schedule-item';
import { getHour } from './hour-schedule-widget.helpers';
import { curLabel } from '../../common/lang/lang';
import { styles } from './hour-schedule-widget.styles';

interface Props {
  schedule: IForecastday['hour'];
  callback?: (index: number) => void;
}

const HourScheduleWidget: FC<Props> = ({ schedule, callback }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    callback && callback(index);
  };
  return (
    <Box component='div' sx={styles.box_container}>
      <Box sx={styles.title_wrapper}>
        <Typography variant='subtitle1'>
          {curLabel.ScheduleWidget.TITLE}
        </Typography>
      </Box>
      {schedule.map((hour, index) => (
        <HourScheduleItem
          key={index}
          time={getHour(hour.time)}
          temperature={hour.temp_c}
          icon={hour.condition.icon}
          weatherStatus={hour.condition.text}
          selected={selectedIndex === index}
          onClick={() => handleListItemClick(index)}
        />
      ))}
    </Box>
  );
};

export default HourScheduleWidget;
