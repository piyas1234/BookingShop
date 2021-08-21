import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StackNavigator from './src/Globals/routes/StackNavigator';
 
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
