import React from 'react';

import RootNavigator from './src/navigation/RootNavigator.js';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
