import { Provider } from 'react-redux';
import { store } from './store/store';
import AppWrapper from './ui/app-wrapper/app-wrapper';
import AppContainer from './ui/app-container/app-container';
import AppContentContainer from './ui/app-content/app-content.container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <AppWrapper>
          <AppContainer>
            <AppContentContainer />
          </AppContainer>
        </AppWrapper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
