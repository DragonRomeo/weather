import { styles } from './forecast.styles';
import InputCity from './input-city/input-city';
import CircularLoader from '../circular-loader/circural-loader';
import { IWeather } from '../../common/types/IWeather';
import { FC } from 'react';
import { Box } from '@mui/material';
import HourScheduleWidgetContainer from '../forecast/hour-schedule-widget/hour-schedule-widget.container';
import WeekScheduleContainer from './week-schedule/week-schedule.container';
import WeatherDetailsContainer from './weather-details/weather-details.container';

interface Props {
  data: IWeather | undefined;
}

const Forecast: FC<Props> = ({ data }) => {
  return (
    <Box sx={styles.forecast_container}>
      <InputCity />
      <Box sx={styles.forecast_group}>
        {data ? (
          <Box sx={styles.forecast_group}>
            <WeekScheduleContainer weeks={data.forecast.forecastday} />
          </Box>
        ) : (
          <Box>
            <CircularLoader />
          </Box>
        )}
        {data ? (
          <HourScheduleWidgetContainer days={data.forecast.forecastday} />
        ) : (
          <div>
            <CircularLoader />
          </div>
        )}
      </Box>
      <WeatherDetailsContainer />
    </Box>
  );
};

export default Forecast;
