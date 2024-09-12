import { Provider } from 'react-redux';
import { store } from './store/store';
import AppWrapper from './ui/app-wrapper/app-wrapper';
import AppContainer from './ui/app-container/app-container';
import AppContentContainer from './ui/app-content/app-content.container';

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <AppContainer>
          <AppContentContainer />
        </AppContainer>
      </AppWrapper>
    </Provider>
  );
}

export default App;
