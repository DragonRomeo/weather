import React from 'react';
import WeatherItem from './weather-item/weather-item';
import { IWeather } from '../../../common/types/IWeather';
import { WeatherItems } from './weather-details.consts';
import { Container, WeatherContainer, Wrapper } from './weather-details.styles';
import { curLabel } from '../../../common/lang/lang';
import { getMetersPerSecond } from './weather-details.helpers';

type Props = {
  weather: IWeather | undefined;
};

const WeatherDetails: React.FC<Props> = ({ weather }) => {
  return (
    <Wrapper>
      <Container>
        <h4>{curLabel.WeatherDetails.TITLE}</h4>
        {weather && (
          <WeatherContainer>
            <h3>{weather.current.condition.text.toUpperCase()}</h3>
            <WeatherItem
              name={WeatherItems.Humidity.name}
              value={weather.current.humidity}
              unitOfMeasure={WeatherItems.Humidity.unitOfMeasure}
              icon={WeatherItems.Humidity.icon}
            ></WeatherItem>
            <WeatherItem
              name={WeatherItems.Cloudy.name}
              value={weather.current.cloud}
              unitOfMeasure={WeatherItems.Cloudy.unitOfMeasure}
              icon={WeatherItems.Cloudy.icon}
            ></WeatherItem>
            <WeatherItem
              name={WeatherItems.Wind.name}
              value={getMetersPerSecond(weather.current.wind_kph)}
              unitOfMeasure={WeatherItems.Wind.unitOfMeasure}
              icon={WeatherItems.Wind.icon}
            ></WeatherItem>
            <WeatherItem
              name={WeatherItems.FeelsLike.name}
              value={Math.round(weather.current.feelslike_c)}
              unitOfMeasure={WeatherItems.FeelsLike.unitOfMeasure}
              icon={WeatherItems.FeelsLike.icon}
            ></WeatherItem>
          </WeatherContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default WeatherDetails;
