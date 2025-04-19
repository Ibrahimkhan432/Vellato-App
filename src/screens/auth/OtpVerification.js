import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ConfirmationField from './ConfirmationField';
import {Button, Txt} from '../../components';
import {GlobalStyles, Spacing} from '../../constants';

const OtpVerification = () => {
  const navigation = useNavigation();
  return (
    <View style={GlobalStyles.mainContainer}>
      <View  style={{gap:Spacing.xxLarge}}>
        <View>
          <Txt variant="title" plainText="OTP Verification"></Txt>
          <Txt
            variant="subTitle"
            style={{top: Spacing.small}}
            plainText="Enter the verification code sent to your email address"
          />
        </View>
        <View style={styles.digitContainer}>
          <ConfirmationField />
        </View>
      </View>

      <View style={{top: 270}}>
        <Button
          title="Verify"
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  digitContainer: {
    gap: 40,
    textAlign: 'center',
  },
});
