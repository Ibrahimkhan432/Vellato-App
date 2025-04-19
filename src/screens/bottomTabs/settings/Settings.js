import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Fonts from '../../../components/Text';
import Sizes from '../../../constants/sizes';
import Colors from '../../../constants/colors';
import InputField from '../../../components/InputField';
import {useNavigation} from '@react-navigation/native';
import {Button, Txt} from '../../../components';
import {GlobalStyles} from '../../../constants';
import {logout} from '../../../constants/images';
import {lock} from '../../../constants/icons';

const PersonalUserData = [
  {
    id: '1',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    email: 'john_123@gmail.com',
  },
];
const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={GlobalStyles.mainContainer}>
      <Txt variant="title" plainText="Settings" />
      <View style={{justifyContent: 'space-between', gap: Sizes.medium,marginTop:Sizes.padding}}>
        <View>
          <View>
            {PersonalUserData.map(item => (
              <View
                key={item.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 70, height: 70, borderRadius: 40}}
                  source={{uri: item.avatar}}
                />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={[
                      Fonts.plainText,
                      {
                        fontSize: Sizes.medium,
                        fontWeight: 'bold',
                        color: Colors.primary,
                      },
                    ]}>
                    {item.name}
                  </Text>
                  <Text style={[Fonts.plainText, {fontSize: Sizes.small}]}>
                    {item.email}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          {' '}
          <Txt variant="smallText" plainText="What is your Name" weight={'bold'}/>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View style={{flex: 1}}>
              <InputField placeholder="John Doe" placeholderTextColor="black" />
            </View>
            <View style={{width: '40%', alignItems: 'flex-end'}}>
              <Button
                title="Change"
                onPress={() => navigation.navigate('ChangeName')}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'column', gap: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePswd')}
              style={styles.pswdBtn}>
              <View style={{flexDirection: 'row', gap: 15}}>
                <Image source={lock} />
                <Text>Change Password</Text>
              </View>
              <View>
                <Text>{'>'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pswdBtn}>
              <View style={{flexDirection: 'row', gap: 15}}>
                <Image style={{width: 25, height: 25}} source={logout} />
                <Text style={{color: Colors.primary, fontWeight: 600}}>
                  Log out
                </Text>
              </View>
              <View>
                <Text>{'>'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* passwordBtn */}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  pswdBtn: {
    width: '100%',
    borderRadius: 25,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.placeholder,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
});
