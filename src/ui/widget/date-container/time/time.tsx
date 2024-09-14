import React from 'react';

type Props = {
  date: Date;
};

const Time: React.FC<Props> = ({ date }) => {
  return <>{date.toLocaleTimeString().slice(0, -3)}</>;
};

export default Time;
