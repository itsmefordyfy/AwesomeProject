import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card, Title, Paragraph, Chip} from 'react-native-paper';
import ChipX from '../ChipX';
import styles from './styles';

interface ICardXProps {
  cardTitle?: string;
  cardParagraph?: string;
  cardCoverURL: string;
  onPress?: any;
  cardStyle?: any;
  tags?: Array<string>;
}

const CardX: React.FC<ICardXProps> = ({
  cardTitle,
  cardParagraph,
  cardCoverURL,
  onPress,
  cardStyle,
}) => {
  return (
    <TouchableOpacity style={cardStyle} onPress={onPress}>
      <Card elevation={3} mode={'elevated'}>
        <Card.Cover source={{uri: cardCoverURL}} />
        {cardTitle && (
          <Card.Content>
            <Title>{cardTitle}</Title>
          </Card.Content>
        )}
      </Card>
    </TouchableOpacity>
  );
};

export default CardX;
