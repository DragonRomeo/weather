import { FC } from 'react';
import { IForecastday, IWeather } from '../../common/types/IWeather';
import ScheduleWidget from './schedule-widget';
import { useSelector } from 'react-redux';
import { IRootState } from '../../common/types/store';

interface Props {
  days: Array<IForecastday>;
}

const ScheduleWidgetContainer: FC<Props> = ({ days }) => {
  const dayIndex = useSelector(
    (state: IRootState) => state.weather.dayOfTheWeek
  );

  return <>{<ScheduleWidget schedule={days[dayIndex]} />}</>;
};

export default ScheduleWidgetContainer;
