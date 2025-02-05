import WidgetContainer from '../widget/widget.container';
import { Content, styles } from './app-content.styles';
import { initLocalStorage } from '../../common/localStorage/localStorage';
import { useDispatch } from 'react-redux';
import { putCity } from '../../store/slices/citySlice';
import TemporaryDrawer from '../temporary-drawer/temporary-drawer';
import { id } from './app-content.consts';
import { Box } from '@mui/material';
import { getCityFromLocalStorage } from '../forecast/input-city/input-city.helpers';
import ForecastContainer from '../forecast/forecast.container';

const AppContent = () => {
  initLocalStorage();
  const city = getCityFromLocalStorage();
  const dispatch = useDispatch();
  dispatch(putCity(city));
  return (
    <Content>
      <Box sx={styles.widget_wrapper}>
        <WidgetContainer />
      </Box>
      <TemporaryDrawer localStorageCreateId={id}>
        <ForecastContainer />
      </TemporaryDrawer>
    </Content>
  );
};

export default AppContent;
