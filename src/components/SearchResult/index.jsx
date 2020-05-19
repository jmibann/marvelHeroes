import React, { useState, useEffect } from 'react';

import CardsBoard from '../CardsBoard';

import { fetchSearchResult } from '../../services/API/searchResult';
import { TitleContainer } from './styles';

const SearchResult = ({ inputSearch }) => {

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const loadSearchResult = async (input) => await fetchSearchResult(input).then(result => {
      if (isMounted) {
        setSearchResult(result);
      } else {
        return;
      }
    })

    loadSearchResult(inputSearch);

    return () => {
      isMounted = false;
    }
  }, [inputSearch])

  return (
    <div>
      <TitleContainer> Results: {inputSearch} </TitleContainer>

      <CardsBoard heroes={searchResult} />
    </div>
  )
}

export default SearchResult;