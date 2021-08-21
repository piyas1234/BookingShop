import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import Header from '../../Globals/routes/Header'
import ColorsStyle from '../../Globals/Styles/ColorsStyle'
import MarginStyles from '../../Globals/Styles/MarginStyles'
import TextStyles from '../../Globals/Styles/TextStyle'

const MyCouponsScreen = () => {
    return (
        <ImageBackground
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
        source={require('./image/Background.jpg')}>
  
        <Header title="My Coupons"  />
  
         
          <View style={[MarginStyles(120).marginTop]}>
          <Image  style={{width:'100%',height:250,resizeMode:'contain'}} source={require('./image/icon_1.png')} />
          <Text style={[TextStyles.NexaBoldText18, {textAlign:'center'}]} >No Coupons </Text>
          <Text   style={[TextStyles.NexaBoldText13, ColorsStyle.WhiteColor, {textAlign:'center',marginTop:10, paddingHorizontal:40}]} >Here are amazing offer to kickstart your trip planning</Text>
          </View>
  
        
        </ImageBackground>
    )
}

export default MyCouponsScreen

const styles = StyleSheet.create({})
