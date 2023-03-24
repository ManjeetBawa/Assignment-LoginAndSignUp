import {StyleSheet} from 'react-native';
import fonts from '../assets/fonts';
const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
  input: {
    backgroundColor: '#F0DFFF',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    marginHorizontal: 35,
    paddingLeft: 10,
    shadowColor: 'black',
    elevation: 10,
    // color: 'balck',
  },
  signuptext: {
    fontFamily:fonts.BOLd,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  }
});

export default styles;
