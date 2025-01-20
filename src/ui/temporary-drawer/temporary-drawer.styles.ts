import { styled } from '@mui/material';
import { muiBorderColor, MUISpacePx } from '../../common/styles/consts';

export const DrawerHeader = styled('div')({
  backdropFilter: 'blur(2px)',
  $div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottom: `1px solid ${muiBorderColor}`,
    padding: `${MUISpacePx} ${MUISpacePx}`,
  },
});
