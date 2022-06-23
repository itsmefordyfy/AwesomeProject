import React, {useContext} from 'react';

import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getSearchResults} from '../../api/pixbay';
import CardX from '../../components/CardX';
import ChipX from '../../components/ChipX';
import {ROUTES} from '../../constants';
import {SearchContext} from '../../context/SearchContext';
import NavigationService from '../../navigation/NavigationService';
import strings from '../../res/strings';
import styles from './styles';

const Details: React.FC = () => {
  const {photoDetails, setSearchQuery, setSearchResult, setRefresh, setPage} =
    useContext(SearchContext);

  const onPressTag = (tag: string) => {
    setSearchQuery(tag);
    setPage(1);
    setRefresh(true);

    getSearchResults(tag, 1)?.then(response => {
      setSearchResult(response?.hits);
      setRefresh(false);
    });
    NavigationService.navigate(ROUTES.RESULT);
  };

  const RenderTags = (tag: string) => {
    return (
      <ChipX
        onPress={() => onPressTag(tag)}
        text={tag}
        style={styles.chipStyle}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CardX
        cardCoverURL={photoDetails.largeImageURL}
        cardTitle={`${strings.AUTHOR} ${photoDetails.user}`}
      />
      <ScrollView style={{flexDirection: 'row', padding: 20}} horizontal>
        {photoDetails.tags.split(',').map((tag: string) => {
          return RenderTags(tag);
        })}
      </ScrollView>
    </View>
  );
};

export default Details;
