import React, {useRef, useState} from 'react';
import styles from './style';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import SignUp from '../signup';
import {useNavigation} from '@react-navigation/native';
import Button from '../button';
const Login = props => {
  // console.log(props);
  const [img, setImg] = useState(
    'https://cdn4.iconfinder.com/data/icons/font-awesome-regular/576/eye-512.png',
  );
  const [pass, setPass] = useState(true);
  const [email, setEmail] = useState(false);
  const [emailval, setEmailval] = useState('');
  const [Password, setPassword] = useState(false);
  const [passVal, setPassval] = useState('');
  const navigator = useNavigation();
  const input2 = useRef();
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passregex = /^(?=.*\d)(?=.*[A-Z])(.{12,50})$/;
  // if (props.route.params.fillemail) {
  //   setEmailval(props.route.params.fillemail);
  // }
  const loginHandler = () => {
    if (!emailRegex.test(emailval)) {
      Alert.alert('not a valid email');
      return null;
    } else if (!passregex.test(passVal)) {
      Alert.alert('not a valid Password');
      return null;
    } else {
      Alert.alert('success');
    }
  };
  const emailHandler = val => {
    setEmailval(val);
    if (emailRegex.test(val)) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  };
  const passwordHandler = val => {
    setPassval(val);
    if (passregex.test(val)) {
      setPassword(true);
    } else {
      setPassword(false);
    }
  };
  const secureimage = () => {
    if (pass) {
      setPass(false);
      setImg(
        'https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/eye-slash-512.png',
      );
    } else {
      setPass(true);
      setImg(
        'https://cdn4.iconfinder.com/data/icons/font-awesome-regular/576/eye-512.png',
      );
    }
  };
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/signup.jpg')}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <Text style={styles.heading}>BigBasket</Text>
            <Text style={styles.disc}>Discover the best foods and drinks in Chandigarh</Text>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
          </View>
          <TextInput
            // value={props.route.params.fillemail || emailval}
            onChangeText={emailHandler}
            keyboardType="email-address"
            placeholder="Your Email"
            style={styles.input}
            placeholderTextColor="#3C4C1E"
            returnKeyType={'next'}
            onSubmitEditing={() => input2.current.focus()}
            blurOnSubmit={false}
          />
          <View style={styles.passbox}>
            <TextInput
              // value={props.route.params.fillpass}
              onChangeText={val => passwordHandler(val)}
              placeholder="Your Password"
              style={styles.imagetext}
              placeholderTextColor="#3C4C1E"
              secureTextEntry={!pass}
              ref={input2}
              returnKeyType={'done'}
              onSubmitEditing={loginHandler}
            />
            <TouchableOpacity onPress={secureimage}>
              <Image
                style={styles.eyeimage}
                source={{
                  uri: `${img}`,
                }}
              />
            </TouchableOpacity>
          </View>
          <Button
            title="Login"
            email={email}
            passcon={true}
            password={Password}
            onpress={loginHandler}
          />
          <View style={styles.signbox}>
            <Text style={styles.signtext}>New Here?</Text>
            <TouchableOpacity
              style={styles.signbttn}
              onPress={() => navigator.navigate('SignUp')}>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
