import WidgetContainer from '../widget/widget.container';
import SettingsContainer from '../settings/setting.container';
import { Content } from './app-content.styles';
import { initLocalStorage } from '../../common/localStorage/localStorage';
import { useDispatch } from 'react-redux';
import { getCityFromLocalStorage } from '../forecast/input-city/input-city.helpers';
import { putCity } from '../../store/slices/citySlice';
import TemporaryDrawer from '../temporary-drawer/temporary-drawer';

const AppContent = () => {
  initLocalStorage();
  const dispatch = useDispatch();
  const city = getCityFromLocalStorage();
  dispatch(putCity(city));
  return (
    <Content>
      <SettingsContainer />
      <WidgetContainer />
      <TemporaryDrawer />
    </Content>
  );
};

export default AppContent;
