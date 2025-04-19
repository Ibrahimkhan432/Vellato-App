import React from 'react';
import {TextInput, StyleSheet, View, Image} from 'react-native';
import { Colors } from '../../constants';
const InputField = ({placeholder, leftIcon, rightIcon}) => {
  return (
    <View style={styles.container}>
      <Image source={leftIcon} style={styles.icon} />
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        placeholderTextColor="gray"
      />
      <Image source={rightIcon} style={styles.icon} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 80,
    paddingHorizontal: 10,
    backgroundColor: Colors.placeholder,
    gap: 10,
  },
  icon: {
    marginLeft: 10,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    borderRadius: 45,
    color: 'black',
  },
});
