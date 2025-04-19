import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../constants/colors.js';
import {logo} from '../constants/images.js';

const Splash = ({navigation}) => {
   
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding1');
    }, 3000);
  });


  return (
    <View style={[styles.container, {backgroundColor: Colors.primary}]}>
      <Image style={styles.logo} source={logo}/>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 278,
    height: 278,
    position: 'absolute',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
});
