import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import CommonStyle from '../../Globals/Styles/CommonStyle';
import BottomNavigator from './../../Globals/routes/BottomNavigator';
import TextStyles from './../../Globals/Styles/TextStyle';
import ColorsStyle from './../../Globals/Styles/ColorsStyle';
import MarginStyles from '../../Globals/Styles/MarginStyles';
import { Data1 } from './data';

const WaletScreen = () => {
  return (
    <ImageBackground
      resizeMode="stretch"
      style={{width: '100%', height: '100%'}}
      source={require('./image/background.jpg')}>
      <Image
        source={require('../../Globals/assets/images/logo.png')}
        style={{width: 150, height: 50, marginLeft: 20}}
      />

      <View style={CommonStyle.rowSpaceBetween}>
        <View style={{flex: 1, justifyContent:'center'}}>
          <Image
            style={{width: 100, height: 50}}
            source={require('./image/icon_1.png')}
          />
        </View>

        <View style={{flex: 3, justifyContent: 'center'}}>
          <View style={[CommonStyle.rowSpaceBetween, {marginTop: 20}]}>
            <Text style={[TextStyles.NexaBoldText15]}>BNB Money</Text>
            <Text
              style={[
                TextStyles.NexaBoldText15,
                ColorsStyle.lightColor4,
                MarginStyles(10).marginRight,
              ]}>
              Rs 0
            </Text>
          </View>

          <Card.Divider color="gray" style={{marginTop: 20}} />
        </View>
      </View>

      <View style={CommonStyle.rowSpaceBetween}>
        <View style={{flex: 1,justifyContent:'center'}}>
          <Image
            style={{width: 100, height: 60}}
            source={require('./image/icon_2.png')}
          />
        </View>

        <View style={{flex: 3, justifyContent: 'center'}}>
          <View style={[CommonStyle.rowSpaceBetween, {marginTop: 20}]}>
            <Text style={[TextStyles.NexaBoldText15]}>UPI </Text>
            <Text
              style={[
                TextStyles.NexaBoldText15,
                ColorsStyle.redColor1,
                MarginStyles(10).marginRight,
              ]}>
             Connect
            </Text>
          </View>

          <Card.Divider color="gray" style={{marginTop: 20}} />
        </View>

 
      </View>

      <View style={CommonStyle.cardStyle}>
      {Data1.map(Item=>{
           return (
            <View style={[CommonStyle.rowSpaceBetween, MarginStyles(10).marginBottom]}>
            <View style={[CommonStyle.rowSpaceBetween ]} >
            <Image source={Item.image} style={{width:50, height:50}} />
            <View style={CommonStyle.center}>
            <Text>{Item.title}</Text>
            </View>
            </View>
            <View style={[CommonStyle.center, MarginStyles(20).marginRight]}>
            <Text style={[TextStyles.NexaBoldText13, ColorsStyle.redColor1]} >Connect</Text>
            </View>
    </View>
           )
      })}
  </View>




  <View style={CommonStyle.rowSpaceBetween}>
        <View style={{flex: 1, justifyContent:'center'}}>
          <Image
            style={{width: 100, height: 50,resizeMode:'contain'}}
            source={require('./image/icon_7.png')}
          />
        </View>

        <View style={{flex: 3, justifyContent: 'center'}}>
          <View style={[CommonStyle.rowSpaceBetween, {marginTop: 20}]}>
            <Text style={[TextStyles.NexaBoldText15]}>Credit Card</Text>
            <Text
              style={[
                TextStyles.NexaBoldText15,
                ColorsStyle.redColor1,
                MarginStyles(10).marginRight,
              ]}>
             Connect
            </Text>
          </View>

          
        </View>

        
      </View>


      <View style={CommonStyle.rowSpaceBetween}>
        <View style={{flex: 1, justifyContent:'center'}}>
          <Image
            style={{width: 100, height: 50,resizeMode:'contain'}}
            source={require('./image/icon_8.png')}
          />
        </View>

        <View style={{flex: 3, justifyContent: 'center'}}>
          <View style={[CommonStyle.rowSpaceBetween, {marginTop: 20}]}>
            <Text style={[TextStyles.NexaBoldText15]}>Debit Card</Text>
            <Text
              style={[
                TextStyles.NexaBoldText15,
                ColorsStyle.redColor1,
                MarginStyles(10).marginRight,
              ]}>
             Connect
            </Text>
          </View>

          
        </View>

        
      </View>

        <View style={{marginHorizontal:20}}>
        <Text style={[TextStyles.NexaBoldText14, ColorsStyle.lightColor3, MarginStyles(10).marginTop]}>
          Creadit Card, Debit Card, Net Banking and other payment option are abiable while booking the hotel.
          
        </Text>

        <Text style={[TextStyles.NexaBoldText14, ColorsStyle.lightColor3, MarginStyles(10).marginTop]}>
          To unlike a wallet, please log Press on the selected wallet.
        </Text>
        </View>


      <BottomNavigator page="wallet" />
    </ImageBackground>
  );
};

export default WaletScreen;

const styles = StyleSheet.create({});
