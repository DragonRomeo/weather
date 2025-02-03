import { IForecastday } from '../../common/types/IWeather';

export const getCurrentTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString().slice(0, -6);
  return +time;
};

export const getHoursAfterCurrent = (hours: IForecastday['hour']) => {
  const currentTime = getCurrentTime();
  const day = hours;
  const today = getHoursAfter(day, currentTime);
  return today;
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
