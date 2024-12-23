import { styled } from '@mui/material';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  opacity: '85%',
});

export const TemperatureContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  div: {
    display: 'flex',
    gap: '5px',
  },
});
