import React, { useState, useEffect } from 'react';

import CardsBoard from '../CardsBoard';

import { fetchSearchResult } from '../../services/API/searchResult';

const SearchResult = ({ history, inputSearch }) => {

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const loadSearchResult = async (input) => await fetchSearchResult(input).then(result => setSearchResult(result))

    loadSearchResult(inputSearch);
  }, [inputSearch])

  return (
    <div>
      <h1>Results: {inputSearch} </h1>

      <CardsBoard heroes={searchResult} />
    </div>
  )
}

export default SearchResult;