import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../Screens/HomeScreen';
import SettingScreen from './../../Screens/SettingScreen/index';
import React from 'react';
 
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle:{
            backgroundColor:'',
            elevation:0,
        },
        headerTitle: '',
        headerRightContainerStyle: {
          position: 'absolute',
          left: '10%',
          right: '10%',
        },
        headerPressOpacity: 110,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Article" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
