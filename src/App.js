import React, { useState, useEffect } from 'react';

import { InputContext } from './context';
import { ThemeProvider } from "styled-components";

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
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const loadHeroes = async () => await fetchRandomHeroes().then(heroes => setLandingHeroes(heroes));

    loadHeroes();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={{ mode: currentTheme }}>
        <InputContext.Provider value={{ input: inputSearch, setInput: setInputSearch, setInputComic: setInputSearchComic }}>
          <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        </InputContext.Provider>

        {!inputSearch.length && !inputSearchComic.length ? <Landing landingHeroes={landingHeroes} /> : null}

        {inputSearch.length && !inputSearchComic.length ? <SearchResult inputSearch={inputSearch} /> : null}

        {(inputSearch && inputSearchComic) ? <ComicInfo comicId={inputSearchComic} /> : null}
      </ThemeProvider>
    </div>
  );
}

export default App;
