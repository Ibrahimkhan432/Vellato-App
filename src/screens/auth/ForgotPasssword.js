import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputField from '../../components/InputField';
import {useNavigation} from '@react-navigation/native';
import {Button, Txt} from '../../components';
import {GlobalStyles, Spacing} from '../../constants';
import {mail} from '../../constants/icons';
const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={[GlobalStyles.mainContainer]}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
            gap: Spacing.xxLarge,
          }}>
          <View style={{gap: 80}}>
            <View>
              <Txt variant="title" plainText={'Forgot Password'} />
              <Txt
                variant="subTitle"
                plainText="Enter the email address to get verification code reset password"
                            style={{top: Spacing.small}}
              />
            </View>
            <View>
              <InputField
                placeholder="Enter your email address"
                leftIcon={mail}
              />
            </View>
          </View>
          <View>
            <Button
              title="Send Code"
              onPress={() => navigation.navigate('OtpVerification')}
            />
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
