import { styles } from './forecast.styles';
import InputCity from './input-city/input-city';
import WeatherDetails from './weather-details/weather-details';
import CircularLoader from '../circular-loader/circural-loader';
import { IWeather } from '../../common/types/IWeather';
import { FC } from 'react';
import ScheduleWidget from '../schedule-widget/schedule-widget';
import { Box } from '@mui/material';
import WeekSchedule from './week-schedule/week-schedule';

interface Props {
  data: IWeather;
}

const Forecast: FC<Props> = ({ data }) => {
  return (
    <Box sx={styles.forecast_container}>
      <Box sx={styles.forecast_group}>
        <InputCity />
        {data ? (
          <Box sx={styles.forecast_group}>
            <WeekSchedule weeks={data?.forecast.forecastday} />
          </Box>
        ) : (
          <Box>
            <CircularLoader />
          </Box>
        )}
        {data ? <WeatherDetails weather={data} /> : <CircularLoader />}
      </Box>
      {data ? (
        <ScheduleWidget schedule={data?.forecast.forecastday} />
      ) : (
        <CircularLoader />
      )}
    </Box>
  );
};

export default Forecast;
