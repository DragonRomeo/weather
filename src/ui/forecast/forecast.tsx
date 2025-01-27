import { styles } from './forecast.styles';
import InputCity from './input-city/input-city';
import WeatherDetails from './weather-details/weather-details';
import CircularLoader from '../circular-loader/circural-loader';
import { IWeather } from '../../common/types/IWeather';
import { FC } from 'react';
import ScheduleWidget from '../schedule-widget/schedule-widget';
import { Box } from '@mui/material';

interface Props {
  data: IWeather | undefined;
}

const Forecast: FC<Props> = ({ data }) => {
  return (
    <Box sx={styles.box_container}>
      <div>
        <InputCity />
        {data ? <WeatherDetails weather={data} /> : <CircularLoader />}
      </div>
      {data ? (
        <ScheduleWidget schedule={data?.forecast.forecastday} />
      ) : (
        <CircularLoader />
      )}
    </Box>
  );
};

export default Forecast;
