import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, colors} from 'react-native-elements';
import {Badge} from 'react-native-elements';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ColorValue from '../../Styles/colorValue';
import CommonStyle from '../../Styles/CommonStyle';
import TextStyles from './../../Styles/TextStyle';
import ColorsStyle from './../../Styles/ColorsStyle';
import MarginStyles from './../../Styles/MarginStyles';
import PaddingStyles from '../../Styles/PaddingStyles';

const PackageCard = () => {
  return (
    <View style={styles.main}>
      <Card.Image
        borderRadius={5}
        source={{
          uri: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/09/switzerland-images.jpg',
        }}>
        <View style={[CommonStyle.rowFlexStart]}>
          <Badge badgeStyle={styles.radius} value="8.8" status="error" />
          <Text style={[TextStyles.NexaBoldText14,ColorsStyle.WhiteColor, MarginStyles(20).marginLeft]}>
            Excilent 1252 rating
          </Text>
        </View>
      </Card.Image>

      <View style={[PaddingStyles(10).Paddingall]}>
        <Card.Title style={[TextStyles.NexaLightText14, ColorsStyle.lightColor8,{textAlign:'left'}]}>
          Jaipur Marriott Hotel
        </Card.Title>
        <View style={[CommonStyle.rowFlexStart]}>
          <View style={[CommonStyle.rowFlexStart]}>
            <AntDesign color="gray" size={12} name="star" />
            <AntDesign color="gray" size={12} name="star" />
            <AntDesign color="gray" size={12} name="star" />
            <AntDesign color="gray" size={12} name="star" />
            <AntDesign color="gray" size={12} name="star" />
          </View>

          <View style={[CommonStyle.rowFlexStart, MarginStyles(10).marginLeft]}>
            <Entypo color="black" size={17} name="location-pin" />
            <Text style={[TextStyles.NexaBoldText14]}>
              7.9 km from center
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[CommonStyle.rowSpaceBetween, PaddingStyles(10).Paddingall,CommonStyle.cardStyle]}>
        <View>
          <Text
            style={[TextStyles.NexaBoldText16 , ColorsStyle.redColor1]}>
            Rs 6,521
          </Text>
          <Text style={[TextStyles.NexaBoldText11 , ColorsStyle.lightColor5]}>
            per right on Marriott hotel
          </Text>
        </View>

        <View style={[CommonStyle.rowFlexStart]}>
          <View style={{justifyContent: 'center'}}>
            <Text style={[TextStyles.NexaBoldText15,ColorsStyle.lightColor8]}>View Deal </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <FontAwesome5 style={[TextStyles.NexaLightText16,ColorsStyle.lightColor8]} name="greater-than" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PackageCard;

const styles = StyleSheet.create({
  main: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor:  ColorValue.lightColor2,
    padding: 2,
    backgroundColor: ColorValue.white,
  },
   
  radius: {borderRadius: 5},
});
