import WidgetContainer from '../widget/widget.container';
import SettingsContainer from '../settings/setting.container';
import { Content, styles } from './app-content.styles';
import { initLocalStorage } from '../../common/localStorage/localStorage';
import { useDispatch } from 'react-redux';
import { putCity } from '../../store/slices/citySlice';
import TemporaryDrawer from '../temporary-drawer/temporary-drawer';
import { city, id } from './app-content.consts';
import { Box } from '@mui/material';

const AppContent = () => {
  initLocalStorage();
  const dispatch = useDispatch();
  dispatch(putCity(city));
  return (
    <Content>
      <SettingsContainer />
      <Box sx={styles.widget_wrapper}>
        <WidgetContainer />
      </Box>
      <TemporaryDrawer localStorageCreateId={id} />
    </Content>
  );
};

export default AppContent;
