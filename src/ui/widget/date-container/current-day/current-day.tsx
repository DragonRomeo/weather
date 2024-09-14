import React from 'react';

type Props = {
  date: Date;
};

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const CurrentDay: React.FC<Props> = ({ date }) => {
  return <>{daysOfWeek[date.getDay()]}</>;
};

export default CurrentDay;
