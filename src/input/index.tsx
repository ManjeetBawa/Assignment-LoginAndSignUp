import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface InputProps {}

const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      <Text>Input</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {}
});
