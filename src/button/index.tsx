import React, {useState} from 'react';
import {Text, View, Pressable, TouchableOpacity, Alert} from 'react-native';
import styles from './style';

interface Buttoncomp {
  title: string;
  email?: boolean;
  password?: boolean;
  onpress: () => void;
}

const Button = ({title, email, password, onpress}: Buttoncomp) => {
  const test = () => {
    if (!email) {
      Alert.alert('Enter Valid Email');
    } else if (!password) {
      Alert.alert('Enter Valid Password');
    } else {
      Alert.alert('succes');
    }
  };
  return (
    <Pressable
      style={[styles.bttn, {opacity: email && password ? 1 : 0.5}]}
      disabled={false}
      onPress={onpress}>
      <Text style={styles.bttntext}>{title}</Text>
    </Pressable>
  );
};

export default Button;
