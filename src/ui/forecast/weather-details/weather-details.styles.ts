import { SxStyles } from '../../../common/types/common';

export const styles: SxStyles = {
  weather_details_wrapper: {
    display: 'flex',
    width: '100%',
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
  weather_details_content_container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    flexWrap: 'wrap',
  },
  weather_details_items_group: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
  },
  weather_details_item_content: {
    margin: '40px 80px',
  },
  weather_details_item_wind: {
    display: 'flex',
    alignItems: 'center',
    margin: '60px 80px',
  },
  weather_details_wind_typography_wrapper: {
    width: '120px',
  },
  weather_details_feelslike_typography_wrapper: {
    width: '70px',
  },
};
