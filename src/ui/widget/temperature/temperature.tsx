import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React from 'react';

type Props = {
  currentTemperature: string;
  variant?: Variant;
  symbol?: string;
};

const Temperature: React.FC<Props> = ({
  currentTemperature,
  variant = 'h1',
  symbol = '°',
}) => {
  return (
    <Typography variant={variant} component='h2'>
      {currentTemperature + symbol}
    </Typography>
  );
};

export default Temperature;
