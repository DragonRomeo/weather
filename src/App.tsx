import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  // @ts-ignore: Store is empty.
  return <Provider store={store}></Provider>;
}

export default App;
