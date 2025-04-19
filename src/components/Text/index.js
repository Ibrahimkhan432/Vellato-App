import React from 'react';
import { Text, } from 'react-native';
import Fonts from '../../constants/fonts';

const Txt = ({
  plainText,
  variant = 'plainText',
  weight,
  center,
  style,
}) => {
  const variantStyle = Fonts.variants[variant] || Fonts.variants.plainText;
  const allStyles = [
    variantStyle,
    weight && { fontWeight: Fonts.weight[weight] || weight },
    center && { textAlign: 'center' },
    style,
  ];

  return <Text style={allStyles}>{plainText}</Text>;
};

export default Txt;
