import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { widgetFontSize } from '../../../common/styles/consts';
import Time from './time/time';
import CurrentDay from './current-day/current-day';
import DateDisplay from './date-display/date-display';

const DateContainer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '510px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Typography variant='body1' fontSize={widgetFontSize}>
        <Time date={time} />
        {' - '}
        <CurrentDay date={time} />
        {', '}
        <DateDisplay date={time} />
      </Typography>
    </div>
  );
};

export default DateContainer;
