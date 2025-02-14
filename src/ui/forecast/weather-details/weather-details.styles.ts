import { forecastItemMaxWidth } from '../../../common/styles/consts';
import { SxStyles } from '../../../common/types/common';

export const styles: SxStyles = {
  weather_wrapper: {
    display: 'flex',
    width: '100%',
    marginBottom: '32px',
  },
  weather_container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    background: 'inherit',
  },
  weather_content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  weather_status: {
    textAlign: 'center',
  },
  weather_content_container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    justifyContent: 'space-between',
    gap: '10px',
  },
  weather_items_group: {
    display: 'flex',
    flexDirection: 'row',
    width: '49%',
    gap: '30px',
  },
  weather_item_content: {
    padding: '20px 0',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather_item_typography: {
    whiteSpace: 'nowrap',
  },
  weather_item_wind: {
    padding: '62px 0',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather_wind_typography_wrapper: {
    width: '120px',
  },
  weather_feelslike_typography_wrapper: {
    width: '70px',
  },
  weather_item: {
    width: '100%',
    maxWidth: forecastItemMaxWidth,
  },
};
