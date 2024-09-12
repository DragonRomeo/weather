import React from 'react';

type Props = {
  icon: string;
};

const WeatherIcon: React.FC<Props> = ({ icon }) => {
  return <img src={icon} width='64px' height='64px' alt='weather' />;
};

export default WeatherIcon;
