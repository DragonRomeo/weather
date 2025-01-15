import { useSelector } from 'react-redux';
import { useGetWeatherQuery } from '../../services/weather-service';
import Widget from './widget';
import { IRootState } from '../../common/types/store';
import CircularLoader from '../circular-loader/circural-loader';

const WidgetContainer = () => {
  const city = useSelector((state: IRootState) => state.city.name);
  const { data } = useGetWeatherQuery(city);
  return <>{data ? <Widget weather={data} /> : <CircularLoader />}</>;
};

export default WidgetContainer;
