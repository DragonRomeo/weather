import React from 'react';

type Props = {
  currentTemperature: number;
  symbol?: string;
};

const Temperature: React.FC<Props> = ({ currentTemperature, symbol = '°' }) => {
  return <> {currentTemperature + symbol}</>;
};

export default Temperature;
