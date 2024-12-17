import { styled } from '@mui/material';
import { forecastConsts } from './forecast.const';
import InputCity from './input-city/input-city';

const ForeCastContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: forecastConsts.width,
  maxWidth: forecastConsts.maxWidth,
  backdropFilter: forecastConsts.blur,
  height: forecastConsts.height,
  borderLeft: forecastConsts.borderLeft,
  paddingLeft: forecastConsts.paddingLeft,
});

const Forecast = () => {
  // Takes data only from 'father'
  return (
    <ForeCastContainer>
      <InputCity />
    </ForeCastContainer>
  );
};

export default Forecast;
