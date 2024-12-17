import { styled } from '@mui/material/styles';
import ForecastContainer from '../forecast/forecast.container';
import WidgetContainer from '../widget/widget.container';

const AppContent = () => {
  const AppContent = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  });
  return (
    <AppContent>
      <WidgetContainer />
      <ForecastContainer />
    </AppContent>
  );
};

export default AppContent;
