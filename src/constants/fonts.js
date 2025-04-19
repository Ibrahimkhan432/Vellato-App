// fonts.js
import Colors from './colors';
import Sizes from './sizes';

const Fonts = {
  variants: {
    title: {
      fontSize: Sizes.large,
      fontWeight: 'bold',
      color: Colors.black,
      fontFamily: 'Poppins-Bold', 
    },
    subTitle: {
      fontSize: Sizes.small,
      color: Colors.gray,
      fontFamily: 'Poppins-SemiBold',
    },
    plainText: {
      fontSize: Sizes.small,
      fontWeight: '400',
      color: Colors.black,
      fontFamily: 'Poppins-Regular',
    },
    smallText: {
      fontSize: Sizes.small,
      fontWeight: '300',
      color: Colors.black,
      fontFamily: 'Poppins-Light',
    },
  },
  weight: {
    light: '300',
    regular: '400',
    semiBold: '600',
    bold: 'bold',
  },
};

export default Fonts;
