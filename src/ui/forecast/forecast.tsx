import { styles } from './forecast.styles';
import InputCity from './input-city/input-city';
import WeatherDetails from './weather-details/weather-details';
import CircularLoader from '../circular-loader/circural-loader';
import { IWeather } from '../../common/types/IWeather';
import { FC } from 'react';
import { Box } from '@mui/material';
import HourScheduleWidgetContainer from '../hour-schedule-widget/hour-schedule-widget.container';
import WeekScheduleContainer from './week-schedule/week-schedule.container';

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
            <WeekScheduleContainer weeks={data.forecast.forecastday} />
          </Box>
        ) : (
          <Box>
            <CircularLoader />
          </Box>
        )}
        {data ? <WeatherDetails weather={data} /> : <CircularLoader />}
      </Box>
      {data ? (
        <HourScheduleWidgetContainer days={data.forecast.forecastday} />
      ) : (
        <div>
          <CircularLoader />
        </div>
      )}
    </Box>
  );
};

export default Forecast;
