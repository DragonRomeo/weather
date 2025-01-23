import { IForecastday } from '../../common/types/IWeather';

export const getCurrentTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString().slice(0, -6);
  return +time;
};

export const getHoursAfterCurrent = (schedule: Array<IForecastday>) => {
  const currentTime = getCurrentTime();
  const day1 = schedule[0].hour;
  const day2 = schedule[1].hour;

  const today = getHoursAfter(day1, currentTime);
  const tomorrow = getHoursAfter(day2, 0, currentTime);
  const concat = today.concat(tomorrow);
  const removeCurrentHour = concat.shift();
  return concat;
};

export const getHoursAfter = (
  schedule: IForecastday['hour'],
  startTime: number,
  endTime: number = 24
) => {
  const filter = schedule.filter(
    (item, index) => index >= startTime && index <= endTime
  );
  return filter;
};

export const getHour = (time: string) => {
  const date = new Date(time);
  const getTime = date.getHours();
  return getTime;
};
