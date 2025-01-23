import React from 'react';

type Props = {
  children: number;
  symbol?: string;
};

const Temperature: React.FC<Props> = ({ children, symbol = '°' }) => {
  return <> {Math.round(children) + symbol}</>;
};

export default Temperature;
