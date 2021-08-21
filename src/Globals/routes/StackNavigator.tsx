import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen';
import PackageScreen from './../../Screens/PackageScreen/index';
import LoginScreen from '../../Screens/LoginScreen/index';
import SignupScreen from '../../Screens/SignupScreen';
import WaletScreen from './../../Screens/WaletScreen/index';
import RefferScreen from './../../Screens/RefferScreen/index';
import MyTripeScreen from './../../Screens/MyTripeScreen/index';
import MyCouponsScreen from './../../Screens/MyCouponsScreen/index';
import MyContributionsScreen from './../../Screens/MyContributionsScreen/index';
import BnbContactScreen from '../../Screens/BnbContactScreen';
import UIPScreen from '../../Screens/UPIScreen';
import MyCardScreen from '../../Screens/MyCardScreen';
import SettingScreen from './../../Screens/SettingScreen/index';
import {Text} from 'react-native-elements';
import ProfileScreen from './../../Screens/ProfileScreen/index';

const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerMode: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PackageScreen" component={PackageScreen} />
      <Stack.Screen name="WaletScreen" component={WaletScreen} />
      <Stack.Screen name="RefferScreen" component={RefferScreen} />
      <Stack.Screen name="MyTripeScreen" component={MyTripeScreen} />
      <Stack.Screen name="MyCouponsScreen" component={MyCouponsScreen} />
      <Stack.Screen
        name="MyContributionsScreen"
        component={MyContributionsScreen}
      />
      <Stack.Screen name="BnbContactScreen" component={BnbContactScreen} />
      <Stack.Screen name="UIPScreen" component={UIPScreen} />
      <Stack.Screen name="MyCardScreen" component={MyCardScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
