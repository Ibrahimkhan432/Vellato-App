import {Image, StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import { Fonts, Sizes, Colors, GlobalStyles, } from '../../constants';
import { EllipseIcon, Rectangle } from '../../constants/icons';
import { onboarding2banner } from '../../constants/images';
const { width, height } = Dimensions.get('window');

const OnBoarding2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={onboarding2banner}
        />
      <View style={[GlobalStyles.mainContainer,{justifyContent: 'flex-end'}]}>
        <View style={styles.icons}>
          <Image source={EllipseIcon} />
          <Image source={Rectangle} />
        </View>
        <Text style={styles.title}>
          Powerful Features at Your Fingertips
        </Text>
        <Text style={styles.content}>
          Manage your client list, view reports, and capture photos or videos of
          your visits — all within one app.
        </Text>
        <View
          style={styles.buttonWrapper}>
          <Button title="Let's Get Started" />
        </View>
       
        <View style={styles.loginRow}>
          <Text style={[Fonts.plainText, { color: Colors.white }]}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={[Fonts.plainText, { color: Colors.white, fontWeight: Fonts.bold }]}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding2;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
    position: 'absolute',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: Sizes.padding * 2,
  },
  icons:{
    flexDirection: 'row',
    marginBottom: Sizes.padding,
    gap: 10,
  },
  title: {
    ...Fonts.title,
    color: Colors.white,
    fontSize: Sizes.large,
    marginBottom: Sizes.padding,
    width: '90%',
  },
  content: {
    ...Fonts.plainText,
    color: Colors.white,
    fontSize: 15,
    lineHeight: 20,
    marginBottom: Sizes.padding * 2,
    width: '95%',
  },
  buttonWrapper: {
    marginBottom: Sizes.padding * 2,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Sizes.padding,
  },
});
