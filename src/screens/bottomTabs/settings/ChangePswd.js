import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sizes from '../../../constants/sizes';
import InputField from '../../../components/InputField';
import {Button, Txt} from '../../../components';

import {useNavigation} from '@react-navigation/native';
import {GlobalStyles} from '../../../constants';

const editPassword = [
  {
    id: '1',
    currentPassword: 'John Doe',
    NewPasword: '',
    confirmPassword: '',
  },
];

const ChangePswd = () => {
  const Navigation = useNavigation();
  return (
    <View style={GlobalStyles.mainContainer}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 1, gap: Sizes.small}}>

        <View style={{flex: 1, gap: Sizes.small}}>
        <Txt variant="title" plainText="Change Password" />
        <Txt
          variant="subTitle"
          plainText="Create new your Password for your account"
        />
        <View style={{}}>
          {editPassword.map(item => (
            <View key={item.id} style={{gap: Sizes.small}}>
              <Text style={styles.pswd}>Current Password:</Text>
              <InputField placeholder="Enter Current Password" />
              <Text style={styles.pswd}>New Password:</Text>
              <InputField placeholder="Enter New Password" />
              <Text style={styles.pswd}>Confirm Password:</Text>
              <InputField placeholder="Confirm New Password" />
            </View>
          ))}
        </View>
      <View style={{ flex: 1, top: Sizes.xxLarge}}>
        <Button
          onPress={() => Navigation.navigate('Dashboard')}
          title="Save Changes"
          />
      </View>

          </View>
        </View>
        <View style={{ flex: 1}}></View>
      </View>

     
    </View>
  );
};

export default ChangePswd;

const styles = StyleSheet.create({
  pswd: {
    fontSize: 16,
    fontWeight: 600,
  },
});
