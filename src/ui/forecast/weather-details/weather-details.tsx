import React from 'react';
import WeatherItem from './weather-item/weather-item';
import { IHour } from '../../../common/types/IWeather';
import { WeatherItems } from './weather-details.consts';
import { styles } from './weather-details.styles';
import { curLabel } from '../../../common/lang/lang';
import { getMetersPerSecond } from './weather-details.helpers';
import { Box } from '@mui/material';
import WeatherBoxLabel from '../../weather-box/weather-box-label/weather-box-label';
import CircularProgressWithLabel from '../../circular-loader/circular-with-lebel/circular-with-lebel';
import { capitalizeLabel } from '../../../common/helpers/string';
import { muiBorderColor } from '../../../common/styles/consts';

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
            <Box sx={styles.weather_details_content_container}>
              <Box sx={styles.weather_details_items_group}>
                <WeatherBoxLabel
                  icon={WeatherItems.Humidity.icon}
                  title={capitalizeLabel(WeatherItems.Humidity.name)}
                >
                  <Box sx={styles.weather_details_item_content}>
                    <CircularProgressWithLabel
                      sx={{ color: muiBorderColor }}
                      thickness={3}
                      value={hour.humidity}
                    />
                  </Box>
                </WeatherBoxLabel>
                <WeatherBoxLabel
                  icon={WeatherItems.Cloudy.icon}
                  title={capitalizeLabel(WeatherItems.Cloudy.name)}
                >
                  <Box sx={styles.weather_details_item_content}>
                    <CircularProgressWithLabel
                      sx={{ color: muiBorderColor }}
                      thickness={3}
                      value={hour.cloud}
                    />
                  </Box>
                </WeatherBoxLabel>
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
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WeatherDetails;
