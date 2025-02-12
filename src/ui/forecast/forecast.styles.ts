import { forecast_max_width_container } from '../../common/styles/consts';
import { SxStyles } from '../../common/types/common';

export const styles: SxStyles = {
  forecast_container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '0 35px',
    gap: '30px',
  },
  forecast_group: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '30px',
  },
  forecast_week: {
    maxWidth: forecast_max_width_container,
    width: '100%',
  },
};
