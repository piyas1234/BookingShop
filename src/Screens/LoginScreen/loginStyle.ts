import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  subLogo: {
    width: '100%',
    height: 700,
    resizeMode: 'contain',
    top: -150,
  },

  main: {
    position: 'absolute',
    top: '50%',
    right: 0,
    left: 0,
  },
  title: {
    textAlign: 'center',
  },
  subTitle: {
    color: 'gray',
    fontWeight: '700',
    textAlign: 'center',
  },
  titleMain: {
    margin: 20,
  },
  buttonmain: {
    alignSelf: 'center',
    width: '90%',
  },
  terms: {
    margin: '5%',
    textAlign: 'center',
  },
});
