import React from 'react';
import { IHour } from '../../../common/types/IWeather';
import { WeatherItems } from './weather-details.consts';
import { styles } from './weather-details.styles';
import { curLabel } from '../../../common/lang/lang';
import { getMetersPerSecond } from './weather-details.helpers';
import { Box, Typography } from '@mui/material';
import WeatherBoxLabel from '../../weather-box/weather-box-label/weather-box-label';
import CircularProgressWithLabel from '../../circular-loader/circular-with-lebel/circular-with-lebel';
import { capitalize } from '../../../common/helpers/string';
import { muiBorderColor } from '../../../common/styles/consts';

type Props = {
  hour: IHour;
  isTitle?: boolean;
};

const WeatherDetails: React.FC<Props> = ({ hour, isTitle = false }) => {
  return (
    <Box sx={styles.weather_wrapper}>
      <Box sx={styles.weather_container}>
        {isTitle && <h4>{curLabel.WeatherDetails.TITLE}</h4>}
        {hour && (
          <Box sx={styles.weather_content}>
            <Typography
             variant='h5'
              sx={styles.weather_status}>
              {hour.condition.text.toUpperCase()}
            </Typography>
            <Box sx={styles.weather_content_container}>
              <Box sx={styles.weather_item}>
                <WeatherBoxLabel
                  icon={WeatherItems.Humidity.icon}
                  title={capitalize(WeatherItems.Humidity.name)}
                >
                  <Box sx={styles.weather_item_content}>
                    <CircularProgressWithLabel
                      sx={{ color: muiBorderColor }}
                      thickness={3}
                      value={hour.humidity}
                    />
                  </Box>
                </WeatherBoxLabel>
              </Box>
              <Box sx={styles.weather_item}>
                <WeatherBoxLabel
                  icon={WeatherItems.Cloudy.icon}
                  title={capitalize(WeatherItems.Cloudy.name)}
                >
                  <Box sx={styles.weather_item_content}>
                    <CircularProgressWithLabel
                      sx={{ color: muiBorderColor }}
                      thickness={3}
                      value={hour.cloud}
                    />
                  </Box>
                </WeatherBoxLabel>
              </Box>
              <Box sx={styles.weather_item}>
                <WeatherBoxLabel
                  icon={WeatherItems.Wind.icon}
                  title={capitalize(WeatherItems.Wind.name)}
                >
                  <Box sx={styles.weather_item_wind}>
                    <Box sx={styles.weather_wind_typography_wrapper}>
                      <Typography
                        variant='h4'
                        sx={styles.weather_item_typography}
                      >{`${getMetersPerSecond(hour.wind_kph)} ${
                        WeatherItems.Wind.unitOfMeasure
                      }`}</Typography>
                    </Box>
                  </Box>
                </WeatherBoxLabel>
              </Box>
              <Box sx={styles.weather_item}>
                <WeatherBoxLabel
                  icon={WeatherItems.FeelsLike.icon}
                  title={capitalize(WeatherItems.FeelsLike.name)}
                >
                  <Box sx={styles.weather_item_wind}>
                    <Box sx={styles.weather_feelslike_typography_wrapper}>
                      <Typography
                        variant='h4'
                        sx={styles.weather_item_typography}
                      >{`${Math.round(hour.feelslike_c)} ${
                        WeatherItems.FeelsLike.unitOfMeasure
                      }`}</Typography>
                    </Box>
                  </Box>
                </WeatherBoxLabel>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WeatherDetails;
