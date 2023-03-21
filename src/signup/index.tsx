import React, {useState, useRef} from 'react';
import styles from './style';
import {Text, View, ImageBackground, TextInput, Alert} from 'react-native';
import Button from '../button';
import {useNavigation} from '@react-navigation/native';

const SignUp = props => {
  // console.log(props);
  const input2 = useRef();
  const navigator = useNavigation();
  const [emai, setEmai] = useState(false);
  const [emailva, setEmailva] = useState('');
  const [Passwor, setPasswor] = useState(false);
  const [passcon, setPasscon] = useState(false);
  const [passVa, setPassva] = useState('');
  const [confirm, setConfirm] = useState('');
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passregex = /^(?=.*\d)(?=.*[A-Z])(.{12,50})$/;
  const emailHandler = val => {
    setEmailva(val);
    if (emailRegex.test(val)) {
      setEmai(true);
    } else {
      setEmai(false);
    }
  };
  const passwordHandler = val => {
    setPassva(val);
    if (passregex.test(val)) {
      setPasswor(true);
    } else {
      setPasswor(false);
    }
  };
  const ConfirmPasswordHandler = val => {
    setConfirm(val);
    if (confirm !== passVa) {
      console.log('false');
      setPasscon(false);
    } else {
      console.log('true');
      setPasscon(true);
    }
  };
  const loginHandler = () => {
    if (!emailRegex.test(emailva)) {
      Alert.alert('not a valid email');
      return null;
    } else if (!passregex.test(passVa)) {
      Alert.alert('not a valid Password');
      return null;
    } else if (!passcon) {
      Alert.alert('Please Enter Same Password');
      return null;
    } else {
      navigator.navigate('Login');
    }
  };
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/backgroundImage.png')}
        resizeMode="cover"
        style={styles.background}>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="enter your email"
          onChangeText={emailHandler}
          onSubmitEditing={() => input2.current.focus()}
        />
        <TextInput
          onChangeText={passwordHandler}
          style={styles.input}
          placeholderTextColor="white"
          placeholder="enter your Password"
          secureTextEntry={true}
          ref={input2}
          onSubmitEditing={loginHandler}
        />
        <TextInput
          onChangeText={ConfirmPasswordHandler}
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Re-enter Password"
          secureTextEntry={true}
          ref={input2}
          onSubmitEditing={loginHandler}
        />

        <Button
          title="register"
          onpress={loginHandler}
          email={emai}
          password={Passwor}
        />
      </ImageBackground>
    </View>
  );
};

export default SignUp;
