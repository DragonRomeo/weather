import { useGetWeatherQuery } from '../../services/weather-service';
import Widget from './widget';

const WidgetContainer = () => {
  const { data } = useGetWeatherQuery('Voronezh');
  return <Widget weather={data} />;
};

export default WidgetContainer;
