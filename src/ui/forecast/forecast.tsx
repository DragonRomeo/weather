import { Container } from './forecast.styles';
import InputCity from './input-city/input-city';
import WeatherDetailWrapper from './weather-details/weather-details.wrapper';

const Forecast = () => {
  // Takes data only from 'father'
  return (
    <Container>
      <InputCity />
      <WeatherDetailWrapper />
    </Container>
  );
};

export default Forecast;
