import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  cityName: string;
};

const City: React.FC<Props> = ({ cityName }) => {
  return <Typography variant='h2'>{cityName}</Typography>;
};

export default City;
