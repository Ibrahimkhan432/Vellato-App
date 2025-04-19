import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { GlobalStyles, Colors, Spacing} from '../../constants';
import {Button, InputField, Txt} from '../../components';
import {Eye, lock, userprofile} from '../../constants/icons';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[GlobalStyles.mainContainer, {justifyContent: 'space-between'}]}>
      <View>
        <Txt plainText="Login" variant="title" />
        <Txt plainText="Log in to your account" variant="subTitle" />

        <View style={[styles.formContainer]}>
          <InputField
            leftIcon={userprofile}
            placeholder="Enter your username"
          />
          <InputField
            leftIcon={lock}
            placeholder="Enter your Password"
            rightIcon={Eye}
          />
        </View>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginTop: Spacing.small}}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Txt
            variant="smallText"
            plainText="Forgot Password?"
            weight={'bold'}
          />
        </TouchableOpacity>
        <View style={{marginTop: Spacing.xxLarge}}>
          <Button
            title="Log In"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
      </View>
      <View>
        <View style={styles.footer}>
          <Txt plainText={'For new accounts, Kindly'} variant="subTitle" />
          <TouchableOpacity>
            <Txt
              variant="smallText"
              plainText="Contact Your Management"
              style={{color: Colors.primary}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: Spacing.large,
    gap: Spacing.xxLarge,
  },
  footer: {
    flexDirection: 'row',
    // marginTop: Spacing.xxLarge,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
