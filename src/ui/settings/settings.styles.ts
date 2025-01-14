import { styled } from '@mui/material';

export const Wrapper = styled('div')({
  marginBottom: '20px',
});

export const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '40vh',
  height: '400px',
  backdropFilter: 'blur(2px)',
});

export const Container = styled('div')({
  display: 'flex',
  width: '10%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',
});
