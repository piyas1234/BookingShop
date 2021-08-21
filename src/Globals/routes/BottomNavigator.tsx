import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';

const BottomNavigator = ({page}:any) => {


  console.warn(page)
  const color = 'gray'
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.main}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} style={styles.button}>
            <Image
             
              style= { page==="home" ? {...styles.image,tintColor:'gray' } : styles.image }
              source={require('../assets/images/icon_10.png')}
            />
            <View>
              <Text style={styles.text}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('PackageScreen')} style={styles.button}>
            <Image
              style= { page==="package" ? {...styles.image,tintColor:'gray' } : styles.image }
              source={require('../assets/images/icon_11.png')}
            />
            <View>
              <Text style={styles.text}>Packages</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={require('../assets/images/icon_14.png')}
            />
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('WaletScreen')} style={styles.button}>
            <Image
              style= { page==="wallet" ? {...styles.image,tintColor:'gray' } : styles.image }
              source={require('../assets/images/icon_12.png')}
            />
            <View>
              <Text style={styles.text}>Wallet</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('RefferScreen')}>
            <View style={styles.button}>
              <Image
              style= { page==="reffer" ? {...styles.image,tintColor:'gray' } : styles.image }
                source={require('../assets/images/icon_13.png')}
              />
              <View>
                <Text style={styles.text}>Reffer & Earn</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: -17,
    left: 0,
    right: 0,
    zIndex: 100,
    
  
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
    bottom: 10,
  },

  button: {
    position: 'relative',
    bottom: -35,
  },
});
