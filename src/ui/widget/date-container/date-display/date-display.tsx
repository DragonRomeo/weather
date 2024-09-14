import React from 'react';

type Props = {
  date: Date;
};

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DateDisplay: React.FC<Props> = ({ date }) => {
  const [currMonth, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return <>{`${day} ${month[currMonth]} ‘${year.toString().slice(-2)}`}</>;
};

export default DateDisplay;
