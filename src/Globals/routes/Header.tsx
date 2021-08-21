import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-elements';
import ColorsStyle from '../Styles/ColorsStyle';
import CommonStyle from '../Styles/CommonStyle';
import TextStyles from '../Styles/TextStyle';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}: any) => {
  const navigation = useNavigation();
  return (
    <View style={[CommonStyle.rowSpaceBetween]}>
      <View style={[CommonStyle.rowFlexStart]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 50, height: 50}}
            source={require('./image/Icon_1.png')}
          />
        </TouchableOpacity>
        <View style={[CommonStyle.center]}>
          <Text style={[TextStyles.NexaBoldText21, ColorsStyle.WhiteColor]}>
            {title}
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <Image
          style={{width: 50, height: 50}}
          source={require('./image/Icon_2.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
