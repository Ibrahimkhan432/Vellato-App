import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import Colors from '../../constants/colors';
const ConfirmationField = () => {
  const [value, setValue] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);

  return (
    <View style={styles.container}>
      <CodeField
        value={value}
        onChangeText={setValue}
        cellCount={4}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusedCell]}>
            <Text style={[styles.text, isFocused && styles.focusedText]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default ConfirmationField;
const styles = StyleSheet.create({
  container: {
  backgroundColor:"red",
    flex: 1,},
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  codeFieldRoot: {
    margin: 20,

  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.placeholder,
  },
  focusedCell: {
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  focusedText: {
    color: '#6B1514',
  },
});
