import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Sizes from '../constants/sizes.js';
import InputField from '../components/InputField';
import {useNavigation} from '@react-navigation/native';
import DropdownComponent from '../components/DropDown/index.js';
import Colors from '../constants/colors.js';
import UploadMedia from '../components/UploadMedia/index.js';
import {Button, Txt} from '../components/index.js';
import GlobalStyles from '../constants/globalStyle.js';

const visitorFormData = {
  name: '',
  email: '',
  visitDate: '',
  location: '3517 W. Gray St. Utica, Pennsylvania',
};

const RegisterVisit = () => {
  const navigation = useNavigation();
  return (
    <FlatList
    style={{backgroundColor:"white"}}
      ListHeaderComponent={
        <View style={GlobalStyles.mainContainer}>
          <View style={{gap: Sizes.small}}>
          <Txt variant="title" plainText="Register Visit" />
          <Txt
            variant="subTitle"
            plainText="Enter the following details to register visit"
          />
          </View>
        </View>
      }
      data={[visitorFormData]}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => (
        <View style={styles.formContainer}>
<Txt variant="PlainTexrt" plainText="Location:" weight={'bold'}/>
          <InputField
            placeholder={visitorFormData.location}
            placeholderTextColor="black"
            onChangeText={text => handleChange('location', text)}
          />
<Txt variant="PlainTexrt" plainText="Client:" weight={'bold'}/>
<DropdownComponent placeholder="Choose Client" />

<Txt variant="PlainTexrt" plainText="Visit Activities:" weight={'bold'}/>
          <TextInput
            style={{
              height: 150,
              backgroundColor: Colors.placeholder,
              color: 'black',
              borderRadius: 20,
              textAlignVertical: 'top',
            }}
            placeholder="Describe visit activities here"
          />

<Txt variant="PlainTexrt" plainText="Time Spent:" weight={'bold'}/>
          <DropdownComponent placeholder="Time Spent" />

          <Txt variant="PlainTexrt" plainText="Upload Media:" weight={'bold'}/>
          {/* <Text style={[Fonts.plainText, {fontSize: 14}]}>
            You can upload up to 6 photos or videos
          </Text> */}
          <Txt variant="smallText" plainText="You can upload up to 6 photos or videos"/>

          {/* uploadMedia container */}
          <View>
            <UploadMedia mediaText="Upload photo / video" />
          </View>
          {/* button container */}
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
                <Txt variant="plainText" plainText="Cancel" weight={'bold'}/>
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

export default RegisterVisit;

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    gap: 10,
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
  },
});
