import React, { useState, useEffect } from 'react';

import { InputContext } from './context';

import Header from './components/Header';
import Landing from './components/Landing';
import SearchResult from './components/SearchResult';
import ComicInfo from './components/ComicInfo';

import { fetchRandomHeroes } from './services/API/landing';
import theme from 'styled-theming';
import styled, { ThemeProvider } from "styled-components";

import './App.css';

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor}
`;


function App() {

  const [landingHeroes, setLandingHeroes] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [inputSearchComic, setInputSearchComic] = useState('');
  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    const loadHeroes = async () => await fetchRandomHeroes().then(heroes => setLandingHeroes(heroes));

    loadHeroes();
  }, []);

  const toogleTheme = () => {
    (currentTheme === 'light') ? setCurrentTheme('dark') : setCurrentTheme('light')
  }

  const switchTo = () => {
    return currentTheme === 'light' ? 'Dark Mode' : 'Light Mode';
  }

  return (
    <div className="App">
      <button onClick={toogleTheme}>{switchTo()}</button>
      <ThemeProvider theme={{ mode: currentTheme }}>
        <InputContext.Provider value={{ input: inputSearch, setInput: setInputSearch, setInputComic: setInputSearchComic }}>
          <Header />
        </InputContext.Provider>

        {!inputSearch.length && !inputSearchComic.length ? <Landing landingHeroes={landingHeroes} /> : null}

        {inputSearch.length && !inputSearchComic.length ? <SearchResult inputSearch={inputSearch} /> : null}

        {(inputSearch && inputSearchComic) ? <ComicInfo comicId={inputSearchComic} /> : null}
      </ThemeProvider>
    </div>
  );
}

export default App;
