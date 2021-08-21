import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Image} from 'react-native-elements';
import BottomNavigator from './../../Globals/routes/BottomNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextStyles from './../../Globals/Styles/TextStyle';
import ColorsStyle from './../../Globals/Styles/ColorsStyle';
import CommonStyle from '../../Globals/Styles/CommonStyle';
import MarginStyles from '../../Globals/Styles/MarginStyles';
import HeightWightStyle from './../../Globals/Styles/HeightWightStyle';
import backgroundColor from '../../Globals/Styles/BackgroundColor';
import PaddingStyles from '../../Globals/Styles/PaddingStyles';
const RefferScreen = () => {
  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.background}
      source={require('./images/background.jpg')}>
      <View style={styles.main}>
        <Image
          style={styles.logo}
          source={require('../../Globals/assets/images/logo.png')}
        />

        <Text style={[TextStyles.NexaBoldText19,ColorsStyle.WhiteColor, {textAlign:'center'} ]}>Refer and earn Rs20 BNBcash</Text>
        <View style={styles.boddyTitle}>
          <Text style={[ TextStyles.NexaBoldText12,ColorsStyle.lightColor8, styles.boddyText]}>You</Text>
          <Text  style={[ TextStyles.NexaBoldText12,ColorsStyle.lightColor8, styles.boddyText]}>Your Buddy gets you</Text>
        </View>

        <View style={styles.boddyTitle}>
          <View>
            <Image
              style={styles.refferImage}
              source={require('./images/icon_1.png')}
            />
            <Text style={[TextStyles.NexaBoldText12, ColorsStyle.WhiteColor]}>
              Reffer a buddy
            </Text>
          </View>

          <View style={{justifyContent: 'center'}}>
            <Ionicons size={24} color="white" name="ios-arrow-redo-outline" />
          </View>
          <View>
            <Image
              style={ styles.refferImage}
              source={require('./images/icon_2.png')}
            />
            <View style={CommonStyle.rowSpaceBetween}>
              <Image
                style={{width: 50, height: 10}}
                source={require('./images/icon_9.png')}
              />
              <Text  style={[TextStyles.NexaBoldText12, ColorsStyle.WhiteColor]}>
                Rs 10
              </Text>
            </View>
            <Text  style={[TextStyles.NexaBoldText12, ColorsStyle.WhiteColor,{textAlign:'center'}]}>
              on Signup
            </Text>
          </View>

          <View>
            <Image
              style={styles.refferImage}
              source={require('./images/icon_3.png')}
            />
            <View style={CommonStyle.rowSpaceBetween}>
              <Image
                style={{width: 50, height: 10}}
                source={require('./images/icon_9.png')}
              />
              <Text  style={[TextStyles.NexaBoldText12, ColorsStyle.WhiteColor,{textAlign:'center'}]}>
                Rs 10
              </Text>
            </View>
            <Text  style={[TextStyles.NexaBoldText12, ColorsStyle.WhiteColor,{textAlign:'center'}]}>
              on their frist trip
            </Text>
          </View>
        </View>



       <View style={{marginHorizontal:10}}>
       <View style={[CommonStyle.rowSpaceEvenly, MarginStyles(20).marginTop]}>
           <View style={[HeightWightStyle('50%').wightValue, CommonStyle.center]}>
           <Text style={[TextStyles.NexaBoldText16, ColorsStyle.lightColor3]} >Refer via</Text>
           </View>
          <Image source={require('./images/icon_4.png')}  style={styles.socialIcon} />
          <Image source={require('./images/icon_5.png')}  style={styles.socialIcon} />
          <Image source={require('./images/icon_6.png')}  style={styles.socialIcon} />
        </View>


       <View style={[CommonStyle.rowSpaceBetween, backgroundColor.lightbackgroundColor1, MarginStyles(15).marginall ]}>
          <View  style={[PaddingStyles(5).Paddingall,PaddingStyles(10).paddingHorizontal,CommonStyle.center ]}>
            <Text style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor4 ]} >Referral Code </Text>
            <Text style={[TextStyles.NexaBoldText15, ColorsStyle.lightColor5 ]}> LHJPOIUY </Text>
          </View>
          <View style={{flexDirection:'row'}}>
             <View style={{justifyContent:'center'}}>
             <Text style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor4 ]}>Tap to copy</Text>
             </View>
            <Image style={{width:50, height:50}} source={require('./images/icon_7.png')} />
          </View>
       </View>

       </View>
      


       <View>
         <Text style={[TextStyles.NexaBoldText16, ColorsStyle.lightColor4, MarginStyles(25).marginLeft ]}>Your Referrals</Text>
       </View>
       <View>
         <Image style={{width:'100%',height:220,resizeMode:'contain'}} source={require('./images/icon_8.png')} />
          <View style={{justifyContent:'center'}}>
          <Text  style={[TextStyles.NexaBoldText14, ColorsStyle.lightColor8, {textAlign:'center'} ]}>Your Buddy gets Rs500 on signup!</Text>
         <Text  style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor4,{textAlign:'center'} ]}>What are you waiting for?</Text>
          </View>
       </View>



      </View>


 
      <View style={styles.bottonNav}>
        <BottomNavigator page="reffer" />
      </View>
    </ImageBackground>
  );
};

export default RefferScreen;

const styles = StyleSheet.create({
  background: 
    {width: '100%', height: '100%'}
   ,
  main: {
    height: '95%',
  },
  bottonNav: {
    height: '5%',
  },
  logo: {
    width: 130,
    height: 50,
    marginLeft: 10,
  },
  title: {
    fontSize: 17,
    color: 'white',
    
    textAlign: 'center',
  },
  reffer: {
    width: '100%',
    height: '30%',
  },
  boddyTitle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  boddyText: {
    fontSize: 12,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  refferImage:{width: '100%', height: 100, resizeMode: 'contain'},
  socialIcon:{width:40, height:40}
});
