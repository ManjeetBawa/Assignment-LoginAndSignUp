import {StyleSheet} from 'react-native';
import fonts from '../assets/fonts';

const styles = StyleSheet.create({
  bttn: {
    backgroundColor: '#DFBFFE',
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 70,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: 'black',
    elevation: 10,
  },
  bttntext: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3C4C1E',
    fontFamily: fonts.BOLd,
  },
});

export default styles;
