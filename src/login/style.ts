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
    height: 150,
    width: 150,
  },
  logocontainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#F0DFFF',
    borderRadius: 10,
    margin: 10,
    color: '#3C4C1E',
    shadowColor: 'black',
    elevation: 10,
    marginHorizontal: 35,
  },
  signbox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 19,
  },
  signtext: {
    color: 'black',
    fontFamily: fonts.BOLd,
    fontSize: 26,
  },
  signbttn: {
    backgroundColor: '#F7B671',
    padding: 9,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  signup: {
    color: '#3C4C1E',
    fontSize: 20,
    fontFamily: fonts.BOLd,
  },
  passbox: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0DFFF',
    paddingHorizontal: 7,
    margin: 10,
    marginHorizontal: 35,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
  },
  eyeimage: {
    height: 30,
    width: 30,
  },
  imagetext: {
    flex: 1,
    color: '#3C4C1E',
    
  },
  container: {
    marginTop: 60,
  }
});

export default styles;
