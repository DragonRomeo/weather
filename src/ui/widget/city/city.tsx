import React from 'react';

type Props = {
  cityName: string;
};

const City: React.FC<Props> = ({ cityName }) => {
  return <>{cityName}</>;
};

export default City;
