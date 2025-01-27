import { styled } from '@mui/material';
import {
  blurBackground,
  muiBorderColor,
  MUISpacePx,
} from '../../common/styles/consts';

export const DrawerHeader = styled('div')({
  backdropFilter: blurBackground,
  $div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottom: `1px solid ${muiBorderColor}`,
    padding: `${MUISpacePx} ${MUISpacePx}`,
  },
});
