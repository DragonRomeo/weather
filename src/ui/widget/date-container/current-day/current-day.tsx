import { Typography } from '@mui/material';
import React from 'react';
import { widgetFontSize } from '../../../common/styles/consts';

type Props = {
  date: Date;
};

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const CurrentDay: React.FC<Props> = ({ date }) => {
  return (
    <Typography variant='body1' fontSize={widgetFontSize}>
      {daysOfWeek[date.getDay()]}
    </Typography>
  );
};

export default CurrentDay;
