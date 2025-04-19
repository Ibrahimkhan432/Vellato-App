// first page of Data TabNavigator
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Sizes from '../../../constants/sizes';
import Fonts from '../../../components/Text';
import InputField from '../../../components/InputField';
import Colors from '../../../constants/colors';
import StockLevel from './StockLevel';
import {GlobalStyles} from '../../../constants';
import Txt from '../../../components/Text';
import {downloadBtn, SearchBtn} from '../../../constants/icons';
const priceList = [
  {
    id: '1',
    name: 'EcoSmart Wireless Earbuds',
    code: 'Esc-343 ',
    price: '10 March 2025',
  },
  {
    id: '2',
    name: 'John GreenLeaf Organic Shampoo',
    code: 'Esc-343 ',
    price: '10 March 2025',
  },
  {
    id: '3',
    name: 'RecycLED Solar Garden Lights (Set of 6)',
    code: 'Esc-343 ',
    price: '10 March 2025',
  },
];

const PriceList = () => {
  const [activeTab, setActiveTab] = useState('PriceList');
  const rednderData = activeTab === 'PriceList' ? priceList : StockLevel;

  return (
    <View style={GlobalStyles.mainContainer}>
      <Txt variant="title" plainText="Data" />
      <View style={{ gap: Sizes.small,marginTop:Sizes.small}}>
        <InputField placeholder="Enter your Search product by name" />
    <TouchableOpacity style={styles.searchBtn}>
          <Image source={SearchBtn}/>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => setActiveTab('PriceList')}
            style={[
              styles.priceBtn,
              {
                backgroundColor:
                  activeTab === 'PriceList'
                    ? Colors.primary
                    : Colors.placeholder,
              },
            ]}>
            <Txt
              plainText={'Price List'}
              style={[
                Fonts.plainText,
                {
                  color: activeTab === 'PriceList' ? Colors.white : Colors.gray,
                },
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('StockLevel')}
            style={[
              styles.stockBtn,
              {
                backgroundColor:
                  activeTab === 'StockLevel'
                    ? Colors.primary
                    : Colors.placeholder,
              },
            ]}>
            <Txt
              plainText={'Stock Level'}
              style={[
                Fonts.plainText,
                {
                  color:
                    activeTab === 'StockLevel' ? Colors.white : Colors.gray,
                },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{gap: Sizes.medium}}>
        <Txt
          variant="title"
          plainText={'Products'}
          style={{fontSize: Sizes.medium,marginTop:Sizes.small}}
        />
        {/* product card */}
        <View style={styles.cardConainer}>
          <FlatList
            data={rednderData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.cardWrapper}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardCode}>
                  Code: {item.code} Price:{item.price}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.downloadBtn}>
        <TouchableOpacity>
          <Image source={downloadBtn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PriceList;

const styles = StyleSheet.create({
  searchBtn: {
    position: 'absolute',
    top: 10,
    right: 8,
    alignSelf: 'flex-end',
  },
  btnContainer: {
      flexDirection: 'row',
      gap: Sizes.small,
      width: '100%',
      height: 50,
    
  },
  priceBtn: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 45,
  },
  stockBtn: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 45,
  },
  cardConainer: {
    borderRadius: 15,
  },
  cardWrapper: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.placeholder,
    marginVertical: 6,
    gap: Sizes.padding,
    padding: 10,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 700,
    color: Colors.primary,
  },
  cardCode: {
    fontSize: Sizes.small,
    color: '#555',
  },
  downloadBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
