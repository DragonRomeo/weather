import { curLabel } from '../../../../common/lang/lang';

export const getDayOfTheWeek = (date: string) => {
  const currentDate = new Date(date);
  const currentDay = curLabel.daysOfWeek[currentDate.getDay()];
  return currentDay;
};
