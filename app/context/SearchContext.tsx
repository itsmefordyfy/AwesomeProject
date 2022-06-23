import React, {createContext, useState} from 'react';
import {getSearchResults} from '../api/pixbay';
import {IPhotoDetails, IPixbay} from '../model/pixbay';

const SearchContext = createContext({});

const SearchProvider = ({children}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [searchResult, setSearchResult] = useState([]);
  const [isRefreshing, setRefresh] = useState<boolean>(false);
  const [photoDetails, setPhotoDetails] = useState<IPhotoDetails>();

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResult,
        setSearchResult,
        isRefreshing,
        setRefresh,
        photoDetails,
        setPhotoDetails,
        page,
        setPage,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export {SearchContext, SearchProvider};
