import { FC } from 'react';
import HourScheduleWidget from './hour-schedule-widget';
import { useDispatch, useSelector } from 'react-redux';
import { IForecastday, IHour } from '../../../common/types/IWeather';
import { IRootState } from '../../../common/types/store';
import { putWeatherHourInfo } from '../../../store/slices/weatherSlice';

interface Props {
  days: Array<IForecastday>;
}

const HourScheduleWidgetContainer: FC<Props> = ({ days }) => {
  const dispatch = useDispatch();
  const dayIndex = useSelector(
    (state: IRootState) => state.weather.dayOfTheWeek
  );

  const handleClick = (hoursData: IHour ) => {
    dispatch(putWeatherHourInfo(hoursData));
  };

  return (
    <>
      {
        <HourScheduleWidget
          schedule={days[dayIndex].hour}
          callback={handleClick}
        />
      }
    </>
  );
};

export default HourScheduleWidgetContainer;
