import { Container } from './forecast.styles';
import InputCity from './input-city/input-city';
import WeatherDetails from './weather-details/weather-details';
import CircularLoader from '../circular-loader/circural-loader';
import { IWeather } from '../../common/types/IWeather';
import { FC } from 'react';
import ScheduleWidget from '../schedule-widget/schedule-widget';

interface Props {
  data: IWeather | undefined;
}

const Forecast: FC<Props> = ({ data }) => {
  return (
    <Container>
      <InputCity />
      {data ? <WeatherDetails weather={data} /> : <CircularLoader />}
      {data ? (
        <ScheduleWidget schedule={data?.forecast.forecastday} />
      ) : (
        <CircularLoader />
      )}
    </Container>
  );
};

export default Forecast;
