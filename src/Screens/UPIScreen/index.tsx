import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Header from '../../Globals/routes/Header'

const UIPScreen = () => {
    return (
        <ImageBackground
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
        source={require('./image/Background.jpg')}>
  
        <Header title="UPI"  />
  
         

          
         
  
        
        </ImageBackground>
    )
}

export default UIPScreen

const styles = StyleSheet.create({})
