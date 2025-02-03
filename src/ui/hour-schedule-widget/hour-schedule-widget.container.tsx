import { FC } from 'react';
import { IForecastday } from '../../common/types/IWeather';
import ScheduleWidget from './hour-schedule-widget';
import { useSelector } from 'react-redux';
import { IRootState } from '../../common/types/store';

interface Props {
  days: Array<IForecastday>;
}

const HourScheduleWidgetContainer: FC<Props> = ({ days }) => {
  const dayIndex = useSelector(
    (state: IRootState) => state.weather.dayOfTheWeek
  );

  return <>{<ScheduleWidget schedule={days[dayIndex].hour} />}</>;
};

export default HourScheduleWidgetContainer;
