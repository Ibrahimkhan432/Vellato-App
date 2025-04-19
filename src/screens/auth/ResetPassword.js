import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sizes from '../../constants/sizes';
import Fonts from '../../components/Text';
import InputField from '../../components/InputField';
import {useNavigation} from '@react-navigation/native';
import {Button, Txt} from '../../components';
import {GlobalStyles, Spacing} from '../../constants';
import {Eye, lock} from '../../constants/icons';

const ResetPassword = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[GlobalStyles.mainContainer, {justifyContent: 'space-between',flex:1}]}>
      <View
       style={{justifyContent: 'space-between',flex:1}}
       >
        <View style={{gap: Sizes.medium}}>
          <View style={{gap: Spacing.small}}>
            <Txt variant="title" plainText="Reset Password" />
            <Txt
              variant="subTitle"
              plainText="Create new password for your account"
            />
          </View>
          <InputField
            leftIcon={lock}
            placeholder="New Password"
            rightIcon={Eye}
          />
          <Txt
            variant="smallText"
            plainText="Password must be 8 characters long"
          />
          <InputField
            leftIcon={lock}
            placeholder="Confirm Password"
            rightIcon={Eye}
          />
        </View>

        <View>
          <Button
            title="Send Code"
            onPress={() => navigation.navigate('Dashboard')}
            />
        </View>
            </View>
          <View style={{flex:1}}>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
