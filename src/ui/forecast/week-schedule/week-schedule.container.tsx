import { FC, useCallback, useEffect, useState } from 'react';
import WeekSchedule from './week-schedule';
import { IForecastday } from '../../../common/types/IWeather';
import { useDispatch } from 'react-redux';
import { putDayOfWeek } from '../../../store/slices/weatherSlice';

interface Props {
  weeks: Array<IForecastday>;
}

const WeekScheduleContainer: FC<Props> = ({ weeks }) => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(putDayOfWeek(index));
  }, [index]);

  const memoizedCallback = useCallback((index: number) => {
    setIndex(index);
  }, []);

  return (
    <>
      <WeekSchedule weeks={weeks} callback={memoizedCallback} />
    </>
  );
};

export default WeekScheduleContainer;
