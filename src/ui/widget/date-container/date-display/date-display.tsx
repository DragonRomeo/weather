import { Typography } from '@mui/material';
import React from 'react';
import { widgetFontSize } from '../../../common/styles/consts';

type Props = {
  date: Date;
};

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DateDisplay: React.FC<Props> = ({ date }) => {
  const [currMonth, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <Typography variant='body1' fontSize={widgetFontSize}>{`${day} ${
      month[currMonth]
    } ‘${year.toString().slice(-2)}`}</Typography>
  );
};

export default DateDisplay;
