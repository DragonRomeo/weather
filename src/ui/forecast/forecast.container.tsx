import Forecast from './forecast';
import { useSelector } from 'react-redux';
import { IRootState } from '../../common/types/store';
import { useGetWeatherQuery } from '../../services/weather-service';

const ForecastContainer = () => {
  const city = useSelector((state: IRootState) => state.city.name);
  const { data } = useGetWeatherQuery(city);
  return <Forecast data={data} />;
};

export default ForecastContainer;
