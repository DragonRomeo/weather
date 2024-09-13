import { Typography } from '@mui/material';
import React from 'react';
import { widgetFontSize } from '../../../common/styles/consts';

type Props = {
  date: Date;
};

const Time: React.FC<Props> = ({ date }) => {
  return (
    <Typography variant='body1' fontSize={widgetFontSize}>
      {date.toLocaleTimeString().slice(0, -3)}
    </Typography>
  );
};

export default Time;
