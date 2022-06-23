import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import {APP_NAVIGATOR} from '../constants';
import strings from '../res/strings';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={APP_NAVIGATOR}
          component={AppNavigator}
          options={{
            headerTitle: strings.PIXBAY_PROJECT,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
