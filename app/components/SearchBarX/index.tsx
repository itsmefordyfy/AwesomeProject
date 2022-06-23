import React from 'react';
import {Searchbar} from 'react-native-paper';
import strings from '../../res/strings';
import styles from './styles';

interface ISearchBarXProps {
  onChangeSearch?: any;
  onIconPress?: any;
  searchQuery: string;
}

const SearchBarX: React.FC<ISearchBarXProps> = ({
  onChangeSearch,
  onIconPress,
  searchQuery,
}) => {
  return (
    <Searchbar
      placeholder={strings.SEARCH_PIXBAY}
      onChangeText={onChangeSearch}
      onIconPress={onIconPress}
      value={searchQuery}
    />
  );
};

export default SearchBarX;
