import React from 'react';
import {StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SearchProvider} from './app/context/SearchContext';
import Navigator from './app/navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <SearchProvider>
        <Navigator />
      </SearchProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
