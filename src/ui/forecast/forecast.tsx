import { styled } from '@mui/material';
import { foreCastMaxWidth } from './forecast.const';
import InputCity from './input-city/input-city';

const Forecast = () => {
  // Takes data only from 'father'
  const ForeCast = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: foreCastMaxWidth,
  });
  return (
    <ForeCast>
      <h1>Forecast</h1>
      <InputCity />
    </ForeCast>
  );
};

export default Forecast;
