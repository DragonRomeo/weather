import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  currentTemperature: string;
};

const Temperature: React.FC<Props> = ({ currentTemperature }) => {
  return (
    <Typography variant='h1' component='h2'>
      {currentTemperature + '°'}
    </Typography>
  );
};

export default Temperature;
