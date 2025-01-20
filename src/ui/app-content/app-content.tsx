import WidgetContainer from '../widget/widget.container';
import SettingsContainer from '../settings/setting.container';
import { Content } from './app-content.styles';
import { initLocalStorage } from '../../common/localStorage/localStorage';
import { useDispatch } from 'react-redux';
import { putCity } from '../../store/slices/citySlice';
import TemporaryDrawer from '../temporary-drawer/temporary-drawer';
import { city, id } from './app-content.consts';

const AppContent = () => {
  initLocalStorage();
  const dispatch = useDispatch();
  dispatch(putCity(city));
  return (
    <Content>
      <SettingsContainer />
      <WidgetContainer />
      <TemporaryDrawer localStorageCreateId={id} />
    </Content>
  );
};

export default AppContent;
