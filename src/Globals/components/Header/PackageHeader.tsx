import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import {TextInput} from 'react-native-gesture-handler';
import backgroundColor from '../../Styles/BackgroundColor';
import ColorsStyle from '../../Styles/ColorsStyle';
import ColorValue from '../../Styles/colorValue';
import TextStyles from './../../Styles/TextStyle';
import MarginStyles from './../../Styles/MarginStyles';
import HeightWightStyle from './../../Styles/HeightWightStyle';
import CommonStyle from '../../Styles/CommonStyle';

const PackageHeader = () => {
  return (
    <View style={[styles.main]}>
      <Text style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor4]}>
        Destination
      </Text>
      <TextInput
        style={[
          styles.input,
          TextStyles.NexaBoldText12,
          backgroundColor.lightbackgroundColor1,
        ]}
      />
      <Card.Divider style={MarginStyles(10).marginall} />

      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <View
          style={[
            HeightWightStyle('50%').wightValue,
            {borderRightWidth: 1, borderRightColor: ColorValue.lightColor2},
          ]}>
          <Text style={[TextStyles.NexaBoldText11, ColorsStyle.lightColor4]}>
            Date
          </Text>
          <Text style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor8]}>
            15 Aug - 16 Aug
          </Text>
        </View>
        <View
          style={[HeightWightStyle('50%').wightValue, CommonStyle.rowCenter]}>
          <View>
            <Text style={[TextStyles.NexaBoldText11, ColorsStyle.lightColor4]}>
              Rooms
            </Text>
            <Text style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor8]}>
              {' '}
              2 guest, 1 Room{' '}
            </Text>
          </View>
        </View>
      </View>
      <Card.Divider style={[MarginStyles(10).marginTop]} />
      <View style={[styles.row, {justifyContent: 'space-evenly'}]}>
        <View style={[styles.row, HeightWightStyle('60%').wightValue]}>
          <Image
            source={require('../../assets/images/icon_21.png')}
            style={{width: 40, height: 40, resizeMode: 'contain'}}
          />
          <View style={styles.center}>
            <Text style={[TextStyles.NexaBoldText15, ColorsStyle.lightColor4]}>
              FILTERS
            </Text>
          </View>
        </View>
        <View style={[styles.row, HeightWightStyle('40%').wightValue]}>
          <Image
            source={require('../../assets/images/icon_20.png')}
            style={{width: 40, height: 40, resizeMode: 'contain'}}
          />
          <View style={styles.center}>
            <Text style={[TextStyles.NexaBoldText15, ColorsStyle.lightColor4]}>
              SORT
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PackageHeader;

const styles = StyleSheet.create({
  main: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: ColorValue.lightColor1,
    elevation: 2,
    backgroundColor: ColorValue.white,
    padding: 10,
  },
  input: {
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    fontSize: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
  },
});
