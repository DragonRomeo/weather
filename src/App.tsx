import { Provider } from 'react-redux';
import { store } from './store/store';
import AppWrapper from './ui/app-wrapper/app-wrapper';
import AppContainer from './ui/app-container/app-container';
import AppContent from './ui/app-content/app-content';

function App() {
  // @ts-ignore: Store is empty.
  return (
    <Provider store={store}>
      <AppWrapper>
        <AppContainer>
          <AppContent />
        </AppContainer>
      </AppWrapper>
    </Provider>
  );
}

export default App;
