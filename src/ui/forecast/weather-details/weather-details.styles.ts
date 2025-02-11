import { SxStyles } from '../../../common/types/common';

export const styles: SxStyles = {
  weather_details_wrapper: {
    display: 'flex',
    width: '80%',
    marginBottom: '32px',
  },
  weather_details_container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    background: 'inherit',
  },
  weather_details_content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  weather_details_items_group: {
    display: 'flex',
    flexDirection: 'row',
  },
  weather_details_item_content: { margin: '40px 80px' },
};
