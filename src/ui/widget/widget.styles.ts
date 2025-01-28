import { temperatureFontSize } from '../../common/styles/consts';
import { SxStyles } from '../../common/types/common';
import { widgetConsts } from './widget.consts';

export const styles: SxStyles = {
  widget_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: widgetConsts.gap,
  },
  info_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  current_temperature_typography: {
    fontSize: temperatureFontSize,
    fontWeight: '400',
  },

  city_typography: {
    fontSize: '3.5rem',
  },
  weather_status_typography: {
    fontSize: '1.4rem',
  },
  feels_like_typography: {
    color: 'ghostwhite',
    fontSize: '1.2rem',
  },
};
