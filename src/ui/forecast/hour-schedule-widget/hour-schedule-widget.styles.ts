import { Theme } from '@mui/material';
import { SxStyles } from '../../../common/types/common';

export const styles: SxStyles = {
  box_container: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    maxWidth: '80%',
    width: '100%',
    marginTop: '26px',
    gap: '10px',
    ...theme.applyStyles('dark', {
      background: 'inherit',
      color: 'grey.300',
      borderColor: 'grey.800',
    }),
  }),
  title_wrapper: {
    marginBottom: '16px',
  },
  items_container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
  },
};
