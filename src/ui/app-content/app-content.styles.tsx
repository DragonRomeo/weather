import { styled } from '@mui/material';
import { SxStyles } from '../../common/types/common';

export const Content = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '100vh',
});

export const styles: SxStyles = {
  widget_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
