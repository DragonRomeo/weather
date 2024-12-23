import { MUISpacePx } from '../../../common/styles/consts';
import { styled } from '@mui/material';

export const Wrapper = styled('div')({
  display: 'flex',
  width: '70%',
});

export const Container = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  background: 'inherit',
  marginTop: MUISpacePx * 5,
});

export const WeatherContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  marginTop: MUISpacePx * 5,
});
