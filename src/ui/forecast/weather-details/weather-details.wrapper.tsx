import WeatherDetails from './weather-details';
import { useSelector } from 'react-redux';
import { useGetWeatherQuery } from '../../../services/weather-service';
import { IRootState } from '../../../common/types/store';
import CircularLoader from '../../circular-loader/circural-loader';

const WeatherDetailWrapper = () => {
  const city = useSelector((state: IRootState) => state.city.name);
  const { data } = useGetWeatherQuery(city);
  return <>{data ? <WeatherDetails weather={data} /> : <CircularLoader />}</>;
};

export default WeatherDetailWrapper;
