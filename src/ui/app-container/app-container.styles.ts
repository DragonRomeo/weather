import { styled } from '@mui/material';
import {
  mainBgColor,
  mainTextColor,
  windowMinWidth,
} from '../../common/styles/consts';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: mainBgColor,
  color: mainTextColor,
  padding: 0,
  width: '100%',
  minWidth: windowMinWidth,
  minHeight: '100vh',
  margin: '0 auto',
});
