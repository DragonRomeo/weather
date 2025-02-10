import { Box, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import HourScheduleItem from './hour-schedule-item/hour-schedule-item';
import { getHour } from './hour-schedule-widget.helpers';
import { styles } from './hour-schedule-widget.styles';
import { IForecastday, IHour } from '../../../common/types/IWeather';
import { curLabel } from '../../../common/lang/lang';
import Slider from '../../slider/slider';

interface Props {
  schedule: IForecastday['hour'];
  callback?: (hour: IHour) => void;
}

const HourScheduleWidget: FC<Props> = ({ schedule, callback }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    callback && callback(schedule[selectedIndex]);
  }, [selectedIndex, schedule]);

  return (
    <Box component='div' sx={styles.box_container}>
      <Box sx={styles.title_wrapper}>
        <Typography variant='subtitle1'>
          {curLabel.ScheduleWidget.TITLE}
        </Typography>
      </Box>
      <Slider>
        <Box component='div' sx={styles.items_container}>
          {schedule.map((hour, index) => (
            <Box key={index}>
              <HourScheduleItem
                time={getHour(hour.time)}
                temperature={hour.temp_c}
                icon={hour.condition.icon}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
              />
            </Box>
          ))}
        </Box>
      </Slider>
    </Box>
  );
};

export default HourScheduleWidget;
