import React from 'react';
import {View} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';

interface IChipX {
  style?: any;
  textStyle?: any;
  text: string;
  onPress?: any;
}

const ChipX: React.FC<IChipX> = ({style, textStyle, text, onPress}) => {
  return (
    <Chip
      mode={'outlined'}
      textStyle={textStyle}
      style={style}
      onPress={onPress}>
      {text}
    </Chip>
  );
};

export default ChipX;
