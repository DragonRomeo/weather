import React from 'react';

type Props = {
  icon: string;
  width?: string;
  height?: string;
};

const WeatherIcon: React.FC<Props> = ({
  icon,
  width = '64px',
  height = '64px',
}) => {
  return <img src={icon} width={width} height={height} alt='weather_icon' />;
};

export default WeatherIcon;
