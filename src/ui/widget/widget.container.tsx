import { useSelector } from 'react-redux';
import { useGetWeatherQuery } from '../../services/weather-service';
import Widget from './widget';
import { IRootState } from '../../common/types/store';

const WidgetContainer = () => {
  const city = useSelector((state: IRootState) => state.city.name);
  const { data } = useGetWeatherQuery(city);
  return <Widget weather={data} />;
};

export default WidgetContainer;
