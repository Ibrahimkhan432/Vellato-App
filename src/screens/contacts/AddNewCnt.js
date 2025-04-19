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
import Colors from '../../constants/colors';
import {Button, Txt} from '../../components';
import {GlobalStyles} from '../../constants';

const visitorFormData = {
  companyName: '',
  email: '',
  visitDate: '',
  brand: 'Urban Mart',
  location: '1901 Thornridge Cir. Shiloh, Ha',
  mainContactName: 'Jane Cooper',
  personName: '',
  mainPersonMobile: '',
  otherMobileNumbers: '',
};

const AddNewContact = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('person');
  return (
    <FlatList
      ListHeaderComponent={
        <View style={GlobalStyles.mainContainer}>
          <Txt variant="title" plainText="Add New Contact" />
          <Txt
            variant="subTitle"
            plainText={'Edit the following details to add new contact'}
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
      }
      data={[visitorFormData]}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => (
        <View style={styles.formContainer}>
          {/* <Text style={styles.label}>Company Name:</Text>
          <InputField
            placeholder={visitorFormData.brand}
            placeholderTextColor="UrbanMart"
          /> */}
          {/* <View style={{flexDirection: 'row', gap: 10,}}>
          <View>
          <Text style={styles.label}>Location:</Text>
          <InputField
            placeholder={visitorFormData.location}
            placeholderTextColor="black"
          />
          </View>
          </View>
          <View>
            <Image
              source={require('../../assests/icons/location.png')}/>
          </View> */}

          <Txt
            variant="PlainTexrt"
            plainText="Main Contact Name:"
            weight={'bold'}></Txt>
          <InputField
            placeholder={visitorFormData.brand}
            placeholderTextColor="UrbanMart"
          />
          <Txt
            variant="PlainTexrt"
            plainText="Prson Name:"
            weight={'bold'}></Txt>
          <InputField
            placeholder="Person Number"
            placeholderTextColor="UrbanMart"
          />

        <Txt variant="PlainTexrt" plainText="Main Person Number:" weight={'bold'}/>
          <InputField
            placeholder="Enter Main Person Number"
            placeholderTextColor="black"
          />
<Txt variant="PlainTexrt" plainText="Other Mobile Numbers (optional):" weight={'bold'}/>
          <InputField
            placeholder="Enter mobile number"
            placeholderTextColor="black"
          />
          <InputField
            placeholder="Enter mobile number"
            placeholderTextColor="black"
          />
          <View>
            <Txt variant='PlainTexrt' plainText='Photos' weight={'bold'}/>
           <Txt variant='PlainTexrt' plainText='Upload company & business card photo'/>
          </View>
          <View>
            <UploadMedia mediaText={'Upload Company Photo'} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              width: '100%',
            }}>
            <View
              style={{
                width: '40%',
                backgroundColor: Colors.placeholder,
                borderRadius: 45,
              }}>
              <TouchableOpacity style={styles.cancelBtn}>
                <Txt variant="PlainTexrt" plainText="Cancel" weight={'bold'}/>
              </TouchableOpacity>
            </View>
            <View style={{width: '56%'}}>
              <Button title="Submit" />
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default AddNewContact;

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    gap: 10,
    backgroundColor: Colors.white,
  },
  label: {
    fontSize: 16,
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
  cancelBtn: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontweight: 900,
  },
});
