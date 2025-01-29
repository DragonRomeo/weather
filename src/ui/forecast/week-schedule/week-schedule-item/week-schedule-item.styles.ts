import { SxStyles } from '../../../../common/types/common';
import { weekItemHoverBg } from './week-schedule-item.consts';

export const styles: SxStyles = {
  item_container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item_weather_container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    alignItems: 'center',
  },
  week_button: {
    width: '100%',
    color: 'inherit',
    textTransform: 'none',
    margin: '0',
    fontSize: '1.1rem',
    padding: '0, 5px',
    '&:hover': {
      backgroundColor: weekItemHoverBg,
    },
  },
};
