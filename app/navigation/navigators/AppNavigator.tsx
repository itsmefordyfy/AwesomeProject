import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../screens/Search';
import {ROUTES} from '../../constants';
import Details from '../../screens/Details';
import strings from '../../res/strings';
import Result from '../../screens/Result';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationService from '../NavigationService';

const Stack = createStackNavigator();
const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <Stack.Screen
        name={ROUTES.SEARCH}
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.RESULT}
        component={Result}
        options={{
          headerTitle: strings.SEARCH_RESULTS,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              name={'chevron-back'}
              size={35}
              color={'#000000'}
              onPress={() => NavigationService.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.DETAILS}
        component={Details}
        options={{
          headerTitle: strings.PHOTO_DETAILS,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              name={'chevron-back'}
              size={35}
              color={'#000000'}
              onPress={() => NavigationService.goBack()}
            />
          ),
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
