import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import BottomNavigator from './../../Globals/routes/BottomNavigator';
import PackageHeader from './../../Globals/components/Header/PackageHeader';
import PackageCard from '../../Globals/components/Card/PackageCard';
import CommonStyle from '../../Globals/Styles/CommonStyle';

const PackageScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../Globals/assets/images/background.png')}
      style={styles.background}>
      <View style={styles.HomeMain}>
        <View>
          <View style={[CommonStyle.rowSpaceBetween]}>
            <Image
              style={{width: 150, height: 50}}
              source={require('../../Globals/assets/images/logo.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileScreen')}>
              <Image
                style={{width: 70, height: 60}}
                source={require('../../Globals/assets/images/icon_6.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <PackageHeader />
        <PackageCard />
      </View>
      <View style={styles.bottomNav}>
        <BottomNavigator page="package" />
      </View>
    </ImageBackground>
  );
};

export default PackageScreen;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  HomeMain: {
    height: '94%',
  },

  bottomNav: {
    height: '6%',
  },
});
