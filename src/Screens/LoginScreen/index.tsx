import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {styles} from './loginStyle';
import {Button} from 'react-native-elements';
import TextStyles from './../../Globals/Styles/TextStyle';
import ColorsStyle from './../../Globals/Styles/ColorsStyle';
import backgroundColor from '../../Globals/Styles/BackgroundColor';
import ColorValue from './../../Globals/Styles/colorValue';
const LoginScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('./image/background.jpg')}>
      <Image
        style={styles.logo}
        source={require('./image/bidnbook_logo_white.png')}
      />
      <Image style={styles.subLogo} source={require('./image/image.png')} />

      <View style={styles.main}>
        <View style={styles.titleMain}>
          <Text style={[TextStyles.NexaBoldText24, styles.title]}>
            Get the full experince
          </Text>
          <Text
            style={[
              TextStyles.NexaBoldText13,
              ColorsStyle.lightColor3,
              styles.title,
            ]}>
            Track prices, make trip planning easier, and enjoy faster booking
          </Text>
        </View>

        <View style={styles.buttonmain}>
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            icon={
              <Image
                source={require('./image/search.png')}
                style={{width: 24, height: 24, resizeMode: 'contain'}}
              />
            }
            type="outline"
            title={' Google ' + ' ' + ' '}
            containerStyle={{marginBottom: 10, paddingVertical: 0}}
            titleStyle={[
              TextStyles.NexaBoldText13,
              {textTransform: 'uppercase', color: ColorValue.primaryColor1},
            ]}
            buttonStyle={{
              borderWidth: 1,
              borderColor: ColorValue.primaryColor1,
            }}
          />

          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            icon={
              <Image
                source={require('./image/facebook.png')}
                style={{width: 24, height: 24, resizeMode: 'contain'}}
              />
            }
            type="outline"
            title=" Facebook"
            titleStyle={[
              TextStyles.NexaBoldText13,
              {textTransform: 'uppercase', color: ColorValue.primaryColor1},
            ]}
            containerStyle={{marginBottom: 10, paddingVertical: 0}}
            buttonStyle={{
              borderWidth: 1,
              borderColor: ColorValue.primaryColor1,
            }}
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            type="solid"
            title=" EMAIL/PHONE"
            titleStyle={[
              TextStyles.NexaBoldText15,
              {textTransform: 'uppercase'},
            ]}
            buttonStyle={backgroundColor.primarybackgroundColor2}
          />
        </View>

        <Text style={[TextStyles.NexaBoldText12, styles.terms]}>
          <Text>By signing, I agree to bidnbook's</Text>
          <Text style={ColorsStyle.primaryColor3}> Terms of use </Text>
          <Text>and </Text>
          <Text style={ColorsStyle.primaryColor3}>Privacy policy</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
