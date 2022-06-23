import React, {useContext} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getSearchResults} from '../../api/pixbay';
import CardX from '../../components/CardX';
import SearchBarX from '../../components/SearchBarX';
import {IPhotoDetails} from '../../model/pixbay';
import styles from './styles';
import ActivityIndicatorX from '../../components/ActivityIndicatorX';
import NavigationService from '../../navigation/NavigationService';
import {ROUTES} from '../../constants';
import {SearchContext} from '../../context/SearchContext';

const Search: React.FC = () => {
  const {searchQuery, setSearchQuery} = useContext(SearchContext);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const navigateToResultsScreen = () => {
    NavigationService.navigate(ROUTES.RESULT);
  };

  return (
    <View style={styles.container}>
      <SearchBarX
        onIconPress={navigateToResultsScreen}
        onChangeSearch={onChangeSearch}
        searchQuery={searchQuery}
      />
    </View>
  );
};

export default Search;
