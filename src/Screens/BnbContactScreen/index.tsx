import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Header from '../../Globals/routes/Header'

const BnbContactScreen = () => {
    return (
        <ImageBackground
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}
        source={require('./BNB_contacts/background.jpg')}>
  
        <Header title="BNB Contacts"  />
  
         

          
         
  
        
        </ImageBackground>
    )
}

export default BnbContactScreen

const styles = StyleSheet.create({})
