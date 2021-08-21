import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import CommonStyle from '../../Globals/Styles/CommonStyle';
import TextStyles from './../../Globals/Styles/TextStyle';
import ColorsStyle from './../../Globals/Styles/ColorsStyle';
import Header from '../../Globals/routes/Header';
import MarginStyles from '../../Globals/Styles/MarginStyles';
 
const MyTripeScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      style={{width: '100%', height: '100%'}}
      source={require('./image/background.jpg')}>

      <Header title="My Trips"  />

      <View style={MarginStyles(40).marginTop}>
      <Image source={require('./image/Icon_3.png')} style={{width:'100%', height:250,resizeMode:'contain'}} />
      </View>

      <View style={{marginHorizontal:40}}>
          <Text style={[TextStyles.NexaBoldText18, {textAlign:'center'}]}>You have no upcomming trips</Text>
          <Text style={[TextStyles.NexaBoldText13, ColorsStyle.WhiteColor, {textAlign:'center', marginTop:10}]}>Here are some amazing offers to kickstart your trip planing</Text>
      </View>


      
      </ImageBackground>
  );
};

export default MyTripeScreen;

const styles = StyleSheet.create({});
