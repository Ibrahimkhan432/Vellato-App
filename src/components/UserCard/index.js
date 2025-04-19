import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import { Sizes } from '../../constants';

const UserCard = ({ avatar, name, brand, visitDate, time }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.brand}>{brand}</Text>
      </View>
      <View>
        <Text style={styles.visitTime}>Visit Time: </Text>
        <Text style={styles.visitDate}>{visitDate} {time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width:180,
    flexDirection: 'row',
    flexWrap:"wrap",
    padding: Sizes.padding,
    borderRadius: Sizes.small,
    marginVertical: 5,
    borderWidth:1,
    borderColor:Colors.placeholder,
},
avatar: {
      marginRight:Sizes.padding,
      marginBottom:Sizes.padding,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor:Colors.placeholder,
  },
  name: {
    fontSize: Sizes.medium,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  brand: {
    fontSize: Sizes.small,
    color: '#555',
  },
  visitDate: {
    fontSize: Sizes.small,
    color: '#777',
  },
  visitTime: {
    fontSize: Sizes.small,
    color: 'black',
    fontWeight:700,

  },
});

export default UserCard;
