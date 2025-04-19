import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UploadMedia from '../../components/UploadMedia';
import Sizes from '../../constants/sizes';
import Fonts from '../../components/Text';
import InputField from '../../components/InputField';
import {RadioButton} from 'react-native-paper';
import {useState} from 'react';
import {Button, Txt} from '../../components';
import {GlobalStyles} from '../../constants';

const visitorFormData = {
  companyName: '',
  email: '',
  visitDate: '',
  brand: 'Urban Mart',
  location: '1901 Thornridge Cir. Shiloh, Ha',
  mainContactName: 'Jane Cooper',
  mainPersonMobile: '1-770-736-8031',
  otherMobileNumbers: '',
};

const Individuals = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    contact: '(021) 123-4567',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '2',
    name: 'John Doe',
    contact: '(021) 123-4567',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '3',
    name: 'John Doe',
    contact: '(021) 123-4567',
  },
];
const EditContact = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('company');
  return (
    <FlatList
      ListHeaderComponent={
        <View style={GlobalStyles.mainContainer}>
          <View style={{gap: Sizes.small}}>
            <Txt variant="title" plainText="Edit Contact" />
            <Txt
              variant="subTitle"
              plainText="Enter the following details to register visit"
            />
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View style={styles.radioOption}>
                <RadioButton
                  value="company"
                  status={value === 'company' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('company')}
                />
                <Txt plainText={'Company'} />
              </View>
              <View style={styles.radioOption}>
                <RadioButton
                  value="person"
                  status={value === 'person' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('person')}
                />
                <Txt plainText={'Person'} />
              </View>
            </View>
          </View>
        </View>
      }
      data={[visitorFormData]}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => (
        <View style={[styles.formContainer, {backgroundColor: 'white'}]}>
          {/* <Text style={styles.label}>Company Name:</Text> */}
          <Txt
            variant="PlainTexrt"
            plainText="Company Name:"
            weight={'bold'}></Txt>
          <InputField
            placeholder={visitorFormData.brand}
            placeholderTextColor="UrbanMart"
          />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Txt
                variant="PlainTexrt"
                plainText="Location:"
                weight={'bold'}></Txt>
              <InputField
                placeholder={visitorFormData.location}
                placeholderTextColor="black"
              />
            </View>
            <View style={{alignItems: 'flex-end', top: 20}}>
              <Image source={require('../../assests/icons/location.png')} />
            </View>
          </View>

          <Txt
            variant="PlainTexrt"
            plainText="Main Contact Name:"
            weight={'bold'}></Txt>
          <InputField
            placeholder={visitorFormData.mainContactName}
            placeholderTextColor="black"
          />

          <Txt
            variant="PlainTexrt"
            plainText="Main Person Mobile:"
            weight={'bold'}></Txt>
          <InputField
            placeholder={visitorFormData.mainContactName}
            placeholderTextColor="black"
          />

          <Txt
            variant="PlainTexrt"
            plainText="Others Mobile Number (optional):"
            weight={'bold'}></Txt>
          <InputField
            placeholder="Enter mobile number"
            placeholderTextColor="black"
          />
          <InputField
            placeholder="Enter mobile number"
            placeholderTextColor="black"
          />
          <Txt
            variant="PlainTexrt"
            plainText="Attached Individuals:"
            weight={'bold'}></Txt>
          <View>
            {Individuals.map(item => (
              <View
                key={item.id}
                style={{flexDirection: 'row', gap: 10, marginBottom: 10}}>
                <Image
                  source={{uri: item.avatar}}
                  style={{width: 40, height: 40, borderRadius: 20}}
                />
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text style={{fontWeight: 700}}>{item.name}</Text>
                  <Text>{item.contact}</Text>
                </View>
              </View>
            ))}
          </View>
          <View>
            <UploadMedia 
            mediaText={'upload company photo/video'}
            />
          </View>
          <View style={{flex: 1}}>
            <Button title="Save Changes" />
          </View>
        </View>
      )}
    />
  );
};

export default EditContact;

const styles = StyleSheet.create({
  formContainer: {
    padding: Sizes.medium,
    gap: 10,
  },
  label: {
    fontSize: Sizes.medium,
    fontWeight: 'bold',
    color: 'black',
  },
  cancelBtn: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontweight: 900,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
