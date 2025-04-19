import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sizes from '../../../constants/sizes';
import InputField from '../../../components/InputField';
import {Button, Txt} from '../../../components';
import {GlobalStyles} from '../../../constants';

const editName = [
  {
    id: '1',
    name: 'John Doe',
    newName: '',
  },
];

const ChangeName = () => {
  return (
    <View style={[GlobalStyles.mainContainer]}>
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={{flex: 1, gap: Sizes.medium}}>
          <View style={{gap: Sizes.medium}}>
            <Txt variant="title" plainText="Edit Personal Info" />
            <Txt variant="subTitle" plainText="Update your Name" />
          </View>
          <View style={{gap: Sizes.medium}}>
            {editName.map(item => (
              <View key={item.id} style={{gap: Sizes.small}}>
                <Txt
                  variant="PlainTexrt"
                  plainText="Current Name"
                  weight={'bold'}></Txt>
                <InputField
                  placeholder={item.name}
                  placeholderTextColor="black"
                />
                <Txt
                  variant="PlainTexrt"
                  plainText="New Name"
                  weight={'bold'}
                />
                <InputField placeholder="Enter Your New Name" />
              </View>
            ))}
          </View>
          <View style={{justifyContent: 'flex-end',flex: 1, top: Sizes.xxLarge}}>
            <Button title="Save" />
          </View>
        </View>

        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};

export default ChangeName;

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: 600,
  },
});
