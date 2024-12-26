import React from 'react';
import { curLabel } from '../../../../common/lang/lang';

type Props = {
  date: Date;
};

const CurrentDay: React.FC<Props> = ({ date }) => {
  return <>{curLabel.daysOfWeek[date.getDay()]}</>;
};

export default CurrentDay;
