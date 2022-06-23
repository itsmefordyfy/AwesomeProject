import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';

interface IActivityIndicatorX {}

const ActivityIndicatorX: React.FC<IActivityIndicatorX> = ({}) => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator animating={true} color={'#000000'} />
    </View>
  );
};

export default ActivityIndicatorX;
