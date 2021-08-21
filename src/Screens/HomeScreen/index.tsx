import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';

import BottomNavigator from './../../Globals/routes/BottomNavigator';
import {Data, data} from './data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';
import CommonStyle from '../../Globals/Styles/CommonStyle';
import TextStyles from './../../Globals/Styles/TextStyle';
import ColorsStyle from './../../Globals/Styles/ColorsStyle';
import backgroundColor from '../../Globals/Styles/BackgroundColor';
import MarginStyles from './../../Globals/Styles/MarginStyles';
import PaddingStyles from '../../Globals/Styles/PaddingStyles';
import ColorValue from './../../Globals/Styles/colorValue';
 
const HomeScreen = ({navigation}:any) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../Globals/assets/images/background.png')}
      style={styles.background}>
      <ScrollView style={styles.HomeMain}>
        <View style={[CommonStyle.rowSpaceBetween]}>
          <Image
            style={styles.logoImage}
            source={require('../../Globals/assets/images/logo.png')}
          />
           <TouchableOpacity onPress={()=>navigation.navigate('ProfileScreen')}>
           <Image
            style={styles.menu}
            source={require('../../Globals/assets/images/icon_6.png')}
          />
           </TouchableOpacity>
        </View>

        <View>
          <View style={styles.book}>
            <Image
              style={{
                width: 200,
                height: 100,
              }}
              source={require('../../Globals/assets/images/image.png')}
            />
          </View>

          <View style={styles.mainBody}>
            <Text style={TextStyles.NexaBoldText15}>
              Hi Guest you are most Welcome
            </Text>
            <View
              style={CommonStyle.rowSpaceEvenly}>
              {Data.map(pd => {
                return (
                  <View>
                    <Image style={{width: 80, height: 80 ,resizeMode:'contain'}} source={pd.image} />
                    <Text
                      style={[TextStyles.NexaBoldText13, ColorsStyle.lightColor4  ,{textAlign:'center',marginTop:-10}]}>
                      {pd.name}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View>
              <View
                style={[CommonStyle.rowFlexStart, backgroundColor.lightbackgroundColor1,MarginStyles(10).marginVertical]}>
                <Image
                  style={{width: 40, height: 40, resizeMode: 'contain'}}
                  source={require('../../Globals/assets/images/icon_7.png')}
                />
                 <View style={CommonStyle.center}>
                 <Text style={[TextStyles.NexaBoldText14, ColorsStyle.lightColor4]}>Flying from </Text>
                 </View>
              </View>

              <View
                style={[CommonStyle.rowFlexStart, backgroundColor.lightbackgroundColor1]}>
                <Image
                  style={{width: 40, height: 40, resizeMode: 'contain'}}
                  source={require('../../Globals/assets/images/icon_8.png')}
                />
                 <View style={CommonStyle.center}>
                 <Text style={[TextStyles.NexaBoldText14, ColorsStyle.lightColor4]}>Flying to </Text>
                 </View>
              </View>
              <View style={{position:'absolute', top:29, left:290}}>
                 <Image source={require('../../Globals/assets/images/icon_9.png')} style={{width:50, height:50}}  />
               </View>
            </View>
              
 
            <View
              style={[CommonStyle.rowSpaceEvenly, backgroundColor.lightbackgroundColor1,MarginStyles(10).marginTop, PaddingStyles(8).paddingVertical]}>
              <View>
                <Text style={[TextStyles.NexaBoldText13, ColorsStyle.lightColor4]}>Departure</Text>
                <View
                  style={[CommonStyle.rowFlexStart]}>
                  <Text
                  style={[TextStyles.NexaBoldText28, ColorsStyle.primaryColor1]}
                    >
                    27
                  </Text>
                  <View style={{marginLeft: 5}}>
                    <Text  style={[TextStyles.NexaBoldText13, ColorsStyle.lightColor4]}>Tue</Text>
                    <Text  style={[TextStyles.NexaBoldText13, ColorsStyle.lightColor4]}>jul</Text>
                  </View>
                </View>
              </View>
              <View style={ CommonStyle.center}>
                <AntDesign color={ColorValue.lightColor3} size={20} name="caretright" />
              </View>
              <View>
                <Text  style={[TextStyles.NexaBoldText13, ColorsStyle.lightColor4]}>Return</Text>
                <View
                  style={[CommonStyle.rowFlexStart]}>
                  <Text
                  style={[TextStyles.NexaBoldText27, ColorsStyle.primaryColor4]}
                     >
                    30
                  </Text>
                  <View style={{marginLeft: 5}}>
                    <Text  style={[TextStyles.NexaBoldText13, ColorsStyle.lightColor4]}>Tue</Text>
                    <Text  style={[TextStyles.NexaBoldText13, ColorsStyle.lightColor4]}>jul</Text>
                  </View>
                </View>
              </View>
            </View>

            <View>
              <View
                style={[backgroundColor.lightbackgroundColor1, MarginStyles(10).marginTop, PaddingStyles(10).paddingVertical]}>
                <Text
                style={[TextStyles.NexaBoldText14, ColorsStyle.primaryColor4,{textAlign:'center'}]}
                  >
                  2 Geust, 1 Room
                </Text>
              </View>
              <Button
                buttonStyle={[backgroundColor.primarybackgroundColor1, MarginStyles(10).marginTop]}
                title="Search"
                titleStyle={TextStyles.NexaBoldText14}
              />
            </View>
          </View>
         <View>
         <ImageBackground
            resizeMode="stretch"
            style={{width: '100%', height: 150, marginTop: 10}}
            source={{
              uri: 'https://images.unsplash.com/photo-1437413646517-e98caade5a58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            }}>
            <View>
              <Text
                style={[TextStyles.NexaBoldText21,ColorsStyle.WhiteColor, MarginStyles(10).marginTop, {textAlign:'center'}]}>
                Tranding Getway for you
              </Text>

              <Text
              style={[TextStyles.NexaBoldText16,ColorsStyle.WhiteColor, MarginStyles(10).marginTop, {textAlign:'center'}]}
                 >
                {' '}
                View All
              </Text>
            </View>
          </ImageBackground>

          
          <FlatList
            data={data}
            style={{position:'relative', top: -60}}
            horizontal
            renderItem={({item}) => (
              <View style={{margin: 5}}>
                <View  >
                <Image
                  style={{
                    width: 130,
                    height: 110,
                    resizeMode: 'contain',
                    zIndex: 200,
                     
                  }}
                  source={{uri: item.image}}
                />
                </View>
                <View style={{position: 'relative', top: 0}}>
                  <Text style={[TextStyles.NexaBoldText13]}>
                    {item.title}
                  </Text>
                  <Text  style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor3]}>
                    Starting:{' '}
                    <Text  style={[TextStyles.NexaBoldText12,{color:'rgb(0, 255, 85)'}]}>
                      Rs.{item.price}/-
                    </Text>
                  </Text>
                </View>
              </View>
            )}
          />
         </View>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <BottomNavigator  page="home" />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
