import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import UserCard from '../../../components/UserCard';
import {useNavigation} from '@react-navigation/native';
import { GlobalStyles, Spacing } from '../../../constants';
import Txt from '../../../components/Text';
import { addUserBtn } from '../../../constants/icons';
const userData = [
  {
    id: '1',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    brand: 'Toyota',
    visitDate: '10 March 2025',
    time: '4 PM',
  },
  {
    id: '2',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Jane Smith',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '2 PM',
  },
  {
    id: '3',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Jane ',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '11 AM',
  },
  {
    id: '4',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: ' Smith',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '11 AM',
  },
  {
    id: '5',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'kale Smith',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '11 AM',
  },
  {
    id: '6',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'jine Smith',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '11 AM',
  },
  {
    id: '7',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'jine Smith',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '11 AM',
  },
  {
    id: '8',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'jine Smith',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '11 AM',
  },
  {
    id: '9',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'jine Smith',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '11 AM',
  },
  {
    id: '10',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'jine Smith',
    brand: 'Honda',
    visitDate: '8 March 2025',
    time: '11 AM',
  },
];

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={GlobalStyles.mainContainer}>
      <Txt variant="subTitle" plainText="Welcome!" />
      <Txt  variant='title' plainText={'John Doe'}/>
      <Txt  variant='smallText' plainText={'Today’s Visits'} weight={'bold'}
      style={{marginTop:Spacing.medium}}
      />
      {/* userCard */}
      <View style={styles.cardConainer}>
        <FlatList
          data={userData}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.cardWrapper}>
            <UserCard
                avatar={item.avatar}
                name={item.name}
                brand={item.brand}
                visitDate={item.visitDate}
                date={item.date}
              />
            </View>
          )}
        />
      </View>
      {/* addUserBtn */}
      <View style={styles.addUserBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterVisit')}>
          <Image 
          source={addUserBtn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({

  cardWrapper: {
    width: 190,
    backgroundColor:"Blue"
  },
  addUserBtn: {
    position: 'absolute',
      bottom: 20,
    right: 20,
  },
});
