import React from 'react';
import {Text, Card} from 'react-native-elements';
import {ProgressBar} from 'react-native-paper';
import {StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import Data from './data';
import {Image} from 'react-native-elements/dist/image/Image';
import {ScrollView} from 'react-native-gesture-handler';
import CommonStyle from '../../Globals/Styles/CommonStyle';
import MarginStyles from '../../Globals/Styles/MarginStyles';
import TextStyles from './../../Globals/Styles/TextStyle';
import ColorsStyle from './../../Globals/Styles/ColorsStyle';
import ColorValue from './../../Globals/Styles/colorValue';
import backgroundColor from '../../Globals/Styles/BackgroundColor';
import BottomNavigator from '../../Globals/routes/BottomNavigator';
import HeightWightStyle from './../../Globals/Styles/HeightWightStyle';
import PaddingStyles from '../../Globals/Styles/PaddingStyles';

const ProfileScreen = ({navigation}:any) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.background}
      source={require('./Profile_page/background.jpg')}>
      <ScrollView>
        <View
          style={[
            CommonStyle.rowSpaceBetween,
            MarginStyles(10).marginHorizontal,
            MarginStyles(5).marginTop,
          ]}>
          <View style={[CommonStyle.rowFlexEnd]}>
            <Image
              source={require('./Profile_page/icon_3.png')}
              style={{width: 50, height: 50, resizeMode: 'contain'}}
            />
            <View style={CommonStyle.center}>
              <Text style={[TextStyles.NexaBoldText22, ColorsStyle.WhiteColor]}>
                {' '}
                Profile
              </Text>
            </View>
          </View>

          <View>
            <Image
              source={require('./Profile_page/icon_5.png')}
              style={{width: 50, height: 50, resizeMode: 'contain'}}
            />
          </View>
        </View>

        <Card containerStyle={styles.radius}>
          <View style={[CommonStyle.rowFlexEnd]}>
            <Image
              source={require('./Profile_page/icon_6.png')}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
          </View>
          <View style={styles.profile}>
            <Image
              source={require('./Profile_page/icon_4.png')}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
            <View style={styles.profileInfo}>
              <Text
                style={[TextStyles.NexaBoldText20, ColorsStyle.lightColor8]}>
                Vaibhav
              </Text>
              <Text
                style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor2]}>
                7894561232
              </Text>
              <Text
                style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor2]}>
                Piyas@gmail.com
              </Text>
            </View>
          </View>
          <View style={{marginTop: 5}}>
            <ProgressBar
              style={{height: 7, borderRadius: 8}}
              progress={0.5}
              color={ColorValue.violet}
            />
            <View
              style={[CommonStyle.rowSpaceBetween, MarginStyles(5).marginTop]}>
              <Text
                style={[TextStyles.NexaBoldText11, ColorsStyle.lightColor3]}>
                Your Profile 40% complete
              </Text>
              <Text style={[TextStyles.NexaBoldText11, ColorsStyle.redColor1]}>
                Verify Email
              </Text>
            </View>
          </View>
        </Card>

        <View style={MarginStyles(15).marginTop}>
          {Data.map(item => {
            return (
              <TouchableOpacity
              onPress={()=>navigation.navigate(item.navigate)}
                style={[
                  CommonStyle.rowFlexStart,
                  MarginStyles(3).marginall,
                  MarginStyles('5%').marginLeft,
                ]}>
                <Image
                  style={{width: 50, height: 50, resizeMode: 'contain'}}
                  source={item.image}
                />
                <View style={{marginLeft: 20}}>
                  <Text
                    style={[
                      TextStyles.NexaBoldText16,
                      ColorsStyle.lightColor7,
                    ]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      TextStyles.NexaBoldText11,
                      ColorsStyle.lightColor4,
                    ]}>
                    {item.details}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={[
            CommonStyle.rowFlexStart,
            HeightWightStyle(80).heightValue,
            MarginStyles(10).marginHorizontal,
            PaddingStyles(7).Paddingall,
            backgroundColor.successbackgroundColorLight1,
            styles.radius,
          ]}>
          <Image
            style={{width: 100, height: 80, resizeMode: 'contain'}}
            source={require('./Profile_page/icon_12.png')}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={TextStyles.NexaBoldText15}>Rate our App</Text>
            <Text style={[TextStyles.NexaBoldText11, ColorsStyle.lightColor4]}>
              We love appreciation and feedbacks
            </Text>
          </View>
        </View>
        <Text
          style={[
            TextStyles.NexaBoldText11,
            ColorsStyle.lightColor3,
            {textAlign: 'center', paddingBottom: 30, paddingTop: 5},
          ]}>
          App version 13.3.2
        </Text>
      </ScrollView>

      <View style={{height: '6%'}}>
        <BottomNavigator />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,

    color: 'white',
  },
  mainTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3%',
  },
  fristTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    flexDirection: 'row',
    marginTop: -40,
  },
  profileInfo: {
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
  },
  radius: {borderRadius: 6},
});
