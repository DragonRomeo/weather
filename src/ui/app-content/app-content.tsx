import ForecastContainer from '../forecast/forecast.container';
import WidgetContainer from '../widget/widget.container';
import SettingsContainer from '../settings/setting.container';
import { Content } from './app-content.styles';
import { initLocalStorage } from '../../common/localStorage/localStorage';

const AppContent = () => {
  initLocalStorage();
  return (
    <Content>
      <SettingsContainer />
      <WidgetContainer />
      <ForecastContainer />
    </Content>
  );
};

export default AppContent;
