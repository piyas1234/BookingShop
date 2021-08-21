import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Header from '../../Globals/routes/Header'

const MyCardScreen = () => {
    return (
        <ImageBackground
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
        source={require('./image/background.jpg')}>
  
        <Header title="My Cards"  />
  
         

          
         
  
        
        </ImageBackground>
    )
}

export default MyCardScreen

const styles = StyleSheet.create({})
