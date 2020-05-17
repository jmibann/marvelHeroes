import React, { useState, useEffect } from 'react';

import { InputContext } from './context';

import Header from './components/Header';
import Landing from './components/Landing';
import SearchResult from './components/SearchResult';
import ComicInfo from './components/ComicInfo';

import { fetchRandomHeroes } from './services/API/landing';

import './App.css';

function App() {

  const [landingHeroes, setLandingHeroes] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [inputSearchComic, setInputSearchComic] = useState('');

  useEffect(() => {
    const loadHeroes = async () => await fetchRandomHeroes().then(heroes => setLandingHeroes(heroes));

    loadHeroes();
  }, []);

  return (
    <div className="App">
      {/* <Route render={({ history }) => */}
      <InputContext.Provider value={{ input: inputSearch, setInput: setInputSearch, setInputComic: setInputSearchComic }}>
        <Header />
      </InputContext.Provider>
      {/* } /> */}

      {!inputSearch.length && !inputSearchComic.length ? <Landing landingHeroes={landingHeroes} /> : null}

      {inputSearch.length && !inputSearchComic.length ? <SearchResult inputSearch={inputSearch} /> : null}

      {(inputSearch && inputSearchComic) ? <ComicInfo comicId={inputSearchComic} /> : null}

    </div>
  );
}

export default App;
