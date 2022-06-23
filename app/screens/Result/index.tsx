import React, {useContext} from 'react';
import {Text, View} from 'react-native';
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
import {useFocusEffect} from '@react-navigation/native';
import {useEffect} from 'react';
import strings from '../../res/strings';

const Result: React.FC = () => {
  const {
    searchQuery,
    searchResult,
    setSearchResult,
    isRefreshing,
    setRefresh,
    setPhotoDetails,
    page,
    setPage,
  } = useContext(SearchContext);

  useEffect(() => {
    searchImage();

    return () => {
      setSearchResult([]);
      setPage(1);
    };
  }, []);

  const onReachedEnd = () => {
    if (!isRefreshing) {
      searchImage();
    }
  };

  const searchImage = () => {
    setRefresh(true);
    setPage(page + 1);

    getSearchResults(searchQuery, page)?.then(response => {
      setSearchResult(searchResult.concat(response?.hits));
      setRefresh(false);
    });
  };

  const RenderCard = (item: IPhotoDetails) => {
    return (
      <CardX
        cardCoverURL={item.largeImageURL}
        onPress={() => navigateToDetailsScreen(item)}
        cardStyle={styles.card}
      />
    );
  };

  const RenderFooterLoader = () => {
    return <View>{isRefreshing && <ActivityIndicatorX />}</View>;
  };

  const navigateToDetailsScreen = (item: IPhotoDetails) => {
    setPhotoDetails(item);
    NavigationService.navigate(ROUTES.DETAILS);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.numberOfResults}>
          {searchResult?.length || 0} {strings.FREE_PHOTOS_OF} {searchQuery}
        </Text>
      </View>

      <FlatList
        data={searchResult}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => RenderCard(item)}
        onEndReached={onReachedEnd}
        onEndReachedThreshold={0.5}
        ListFooterComponent={RenderFooterLoader}
      />
    </View>
  );
};

export default Result;
