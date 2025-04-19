import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { onboarding1banner, onboarding2banner } from '../../constants/images';
import { Colors, Fonts, Sizes, GlobalStyles } from '../../constants';
import { Button, Txt } from '../../components';
import { EllipseIcon, Rectangle } from '../../constants/icons';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Get Started with Vellato',
    description:
      'Easily track your daily sales visits and stay organized. Quickly log your client interactions with just a few taps',
    image: onboarding1banner,
    icons: [Rectangle, EllipseIcon],
  },
  {
    key: '2',
    title: 'Powerful Features at Your Fingertips',
    description:
      'Manage your client list, view reports, and capture photos or videos of your visits — all within one app.',
    image: onboarding2banner,
    icons: [EllipseIcon, Rectangle],
  },
];

const OnBoarding = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlideIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        onScroll={handleScroll}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={[GlobalStyles.mainContainer, { justifyContent: 'flex-end' ,backgroundColor:'transparent'}]}>
              <View style={styles.icons}>
                {item.icons.map((icon, i) => (
                  <Image key={i} source={icon} />
                ))}
              </View>
              <Txt plainText={item.title} variant="title" style={styles.title} />
              <Txt plainText={item.description} variant="subTitle" style={styles.content}/>
              <View style={styles.buttonWrapper}>
                <Button
                  title={item.key === slides.length.toString() ? "Let's Get Started" : 'Next'}
                  onPress={() => {
                    if (item.key === slides.length.toString()) {
                      navigation.navigate('Login');
                    } else {
                      flatListRef.current.scrollToIndex({ index: currentSlideIndex + 1 });
                    }
                  }}
                />
              </View>
              <View style={styles.loginRow}>
                <Txt plainText="Already have an account? " variant="smallText" style={styles.loginText} />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Txt plainText="Log In" variant="smallText" weight="bold" style={styles.loginLink} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
    position: 'absolute',
  },
  icons: {
    flexDirection: 'row',
    marginBottom: Sizes.padding,
    gap: 10,
  },
  title: {
    color: Colors.white,
    width: '75%',
    marginBottom: Sizes.padding,
    fontSize: Sizes.xLarge,
  },
  content: {
    color: Colors.white,
    lineHeight: 20,
    width: '95%',
    marginBottom: Sizes.padding,
  },
  buttonWrapper: {
    marginBottom: Sizes.padding * 2,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: Colors.white,
  },
  loginLink: {
    color: Colors.white,
  },
});
