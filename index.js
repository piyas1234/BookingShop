import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'react-native-elements';
import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const MyView = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => MyView);
