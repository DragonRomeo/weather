import WeatherDetails from './weather-details';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../common/types/store';
import CircularLoader from '../../circular-loader/circural-loader';

const WeatherDetailsContainer = () => {
  const hourInfo = useSelector(
    (state: IRootState) => state.weather.weatherHour
  );
  return (
    <>
      {hourInfo ? (
        <WeatherDetails hour={hourInfo} />
      ) : (
        <div>
          <CircularLoader />
        </div>
      )}
    </>
  );
};

export default WeatherDetailsContainer;
