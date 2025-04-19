import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Sizes from '../../constants/sizes';
import Fonts from '../../components/Text';
import Colors from '../../constants/colors';
import InputField from '../../components/InputField';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyles} from '../../constants';
import Txt from '../../components/Text';
import {addUserBtn, deleteIcon, editIcon, filterIcon, SearchBtn} from '../../constants/icons';
const priceList = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '2',
    name: 'kale Doe',
    brand: 'Suzuki',
    contact: '+1 (800) 342-4752',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '3',
    name: 'pixel Doe',
    brand: 'Corolla',
    contact: '+1 (800) 342-4322',
  },
];

const Contacts = () => {
  const navigation = useNavigation();
  return (
    <View style={[GlobalStyles.mainContainer, {gap: Sizes.large}]}>
      <View>
        <Txt variant="title" plainText="Contacts" />
      </View>
      <View>
        <InputField placeholder="Search Contacts" />
        <TouchableOpacity style={styles.searchBtn}> 
          <Image source={SearchBtn} style={{width: 40, height: 40}} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Txt
          variant="smallText"
          plainText="Available Contacts"
          weight={'bold'}
        />
        <Image source={filterIcon} />
      </View>
      {/* userCard */}
      <View style={styles.cardConainer}>
        <FlatList
          data={priceList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.cardWrapper}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <View>
                  <Image source={item.avatar} style={styles.avatar} />
                </View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.brand}>{item.brand}</Text>
                  <Text style={styles.contact}>{item.contact}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', gap: 20}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditContact')}>
                  <Image source={editIcon} />
                </TouchableOpacity>
                <Image source={deleteIcon} />
              </View>
            </View>
          )}
        />
      </View>
      {/* addUserBtn */}
      <View style={styles.addUserBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('AddNewContact')}>
          <Image source={addUserBtn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({

  searchBtn: {
    position: 'absolute',
    top: 5,
    right: 8,
    alignSelf: 'flex-end',
  },
  cardWrapper: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.placeholder,
    marginVertical: 6,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    fontSize: 18,
    fontWeight: 700,
    color: Colors.primary,
  },
  cardCode: {
    fontSize: 14,
    color: '#555',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgray',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  brand: {
    fontSize: 10,
    color: '#555',
  },
  contact: {
    fontSize: 10,
    color: 'black',
    fontWeight: 600,
  },
  addUserBtn: {
bottom: 20,
    right: 20,
    position: 'absolute',
  },
});
