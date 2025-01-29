import { SxStyles } from '../../common/types/common';

export const styles: SxStyles = {
  forecast_container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    background: 'inherit',
    paddingLeft: '35px',
    gap: '50px',
  },
  forecast_group: { display: 'flex', flexDirection: 'column', gap: '30px' },
  forecast_week: { width: '300px' },
};
