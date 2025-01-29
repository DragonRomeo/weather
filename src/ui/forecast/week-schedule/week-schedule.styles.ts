import { SxStyles } from '../../../common/types/common';

export const styles: SxStyles = {
  week_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  week_button: {
    width: '100%',
    color: 'inherit',
    textTransform: 'none',
    margin: '0',
    fontSize: '1.1rem',
    '&:hover': {
      backgroundColor: 'rgba(169, 177, 179, 0.53)',
    },
  },
};
