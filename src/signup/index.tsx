import React, {useState, useRef, useEffect} from 'react';
import styles from './style';
import {Text, View, ImageBackground, TextInput, Alert} from 'react-native';
import Button from '../button';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

const SignUp = props => {
  // console.log(props);
  const input2 = useRef();
  const input3 = useRef();
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
    // console.log('val: ', val);
    setConfirm(val);
  };

  useEffect(() => {
    if (confirm === passVa) {
      setPasscon(true);
    } else {
      setPasscon(false);
    }
  }, [confirm, passVa]);

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
      Snackbar.show({
        text: 'Account Created',
        duration: Snackbar.LENGTH_SHORT,
      });
      navigator.navigate('Login');
    }
  };
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/signup.jpg')}
        resizeMode="cover"
        style={styles.background}>
        <Text style={styles.signuptext}> Sign Up Here</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#3C4C1E"
          placeholder="Your email"
          onChangeText={emailHandler}
          returnKeyType={'next'}
          blurOnSubmit={false}
          onSubmitEditing={() => input2.current.focus()}
        />
        <TextInput
          onChangeText={passwordHandler}
          style={styles.input}
          placeholderTextColor="#3C4C1E"
          placeholder="Your Password"
          // secureTextEntry={true}
          blurOnSubmit={false}
          returnKeyType={'next'}
          ref={input2}
          onSubmitEditing={() => input3.current.focus()}
        />
        <TextInput
          // onEndEditing={value => {
          //   console.log(value.nativeEvent.text);
          // }}
          onChangeText={ConfirmPasswordHandler}
          value={confirm}
          style={styles.input}
          placeholderTextColor="#3C4C1E"
          placeholder="Re-enter Password"
          // secureTextEntry={true}
          ref={input3}
          onSubmitEditing={loginHandler}
        />

        <Button
          title="register"
          onpress={loginHandler}
          email={emai}
          password={Passwor}
          passcon={passcon}
        />
      </ImageBackground>
    </View>
  );
};

export default SignUp;
