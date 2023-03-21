import {StyleSheet} from 'react-native';
import fonts from '../assets/fonts';
const styles = StyleSheet.create({
  testing: {
    fontSize: 30,
    fontFamily: fonts.BOLd,
  },
  background: {
    height: '100%',
  },
  logo: {
    height: 90,
    width: 90,
  },
  logocontainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FE6244',
    borderRadius: 10,
    margin: 10,
    color: 'white',
  },
  signbox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 19,
  },
  signtext: {
    color: 'white',
    fontFamily: fonts.BOLd,
    fontSize: 26,
  },
  signbttn : {
    backgroundColor: '#FFDEB9',
    padding: 9,
    borderRadius: 15,
  },
  signup: {
    color: 'black',
    fontSize: 20,
    fontFamily: fonts.BOLd,
  },
  passbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FE6244',
    paddingHorizontal: 7,
    margin: 10,
    borderRadius: 10,
  },
  eyeimage: {
    height: 30,
    width: 30,
  },
  imagetext: {
    flex: 1,
    color: 'white',
  },
});

export default styles;
