import React from 'react';
import { curLabel } from '../../../../common/lang/lang';

type Props = {
  date: Date;
};

const DateDisplay: React.FC<Props> = ({ date }) => {
  const [currMonth, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <>{`${day} ${curLabel.months[currMonth]} ‘${year.toString().slice(-2)}`}</>
  );
};

export default DateDisplay;
