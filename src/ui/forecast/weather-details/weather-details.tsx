import React from 'react';
import WeatherItem from './weather-item/weather-item';
import { IHour } from '../../../common/types/IWeather';
import { WeatherItems } from './weather-details.consts';
import { styles } from './weather-details.styles';
import { curLabel } from '../../../common/lang/lang';
import { getMetersPerSecond } from './weather-details.helpers';
import { Box } from '@mui/material';

type Props = {
  hour: IHour;
  isTitle?: boolean;
};

const WeatherDetails: React.FC<Props> = ({ hour, isTitle = false }) => {
  return (
    <Box sx={styles.weather_details_wrapper}>
      <Box sx={styles.weather_details_container}>
        {isTitle && <h4>{curLabel.WeatherDetails.TITLE}</h4>}
        {hour && (
          <Box sx={styles.weather_details_content}>
            <h3>{hour.condition.text.toUpperCase()}</h3>
            <Box sx={styles.weather_details_items_group}>
              <WeatherItem
                name={WeatherItems.Humidity.name}
                value={hour.humidity}
                unitOfMeasure={WeatherItems.Humidity.unitOfMeasure}
                icon={WeatherItems.Humidity.icon}
              ></WeatherItem>
              <WeatherItem
                name={WeatherItems.Cloudy.name}
                value={hour.cloud}
                unitOfMeasure={WeatherItems.Cloudy.unitOfMeasure}
                icon={WeatherItems.Cloudy.icon}
              ></WeatherItem>
            </Box>
            <Box sx={styles.weather_details_items_group}>
              <WeatherItem
                name={WeatherItems.Wind.name}
                value={getMetersPerSecond(hour.wind_kph)}
                unitOfMeasure={WeatherItems.Wind.unitOfMeasure}
                icon={WeatherItems.Wind.icon}
              ></WeatherItem>
              <WeatherItem
                name={WeatherItems.FeelsLike.name}
                value={Math.round(hour.feelslike_c)}
                unitOfMeasure={WeatherItems.FeelsLike.unitOfMeasure}
                icon={WeatherItems.FeelsLike.icon}
              ></WeatherItem>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WeatherDetails;
