import React, { useState, useEffect } from 'react';

import CardsBoard from '../CardsBoard';

import { fetchSearchResult } from '../../services/API/searchResult';

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
      <h1>Results: {inputSearch} </h1>

      <CardsBoard heroes={searchResult} />
    </div>
  )
}

export default SearchResult;