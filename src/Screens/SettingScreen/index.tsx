import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Header from '../../Globals/routes/Header'

const SettingScreen = () => {
    return (
        <ImageBackground
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
        source={require('./image/background.jpg')}>
  
        <Header title="Settings"  />
  
         

          
         
  
        
        </ImageBackground>
    )
}

export default SettingScreen

const styles = StyleSheet.create({})
