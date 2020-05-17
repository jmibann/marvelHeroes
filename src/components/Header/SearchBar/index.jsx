import React, { useContext, useState } from 'react';

import { SearchBar, Separator, Input, MagnifierContainer } from './styles';

import { InputContext } from '../../../context';

import { HERO_ID_PREFIX } from '../../../utils';

const COMIC_QUERY = 'https://www.marvel.com/comics/issue/'

const getComicId = (string) => {
  return string.slice(COMIC_QUERY.length).split('/').shift();
}


const SearchBarContainer = (props) => {

  const [favList, setFavList] = useState([]);
  const { input, setInput, setInputComic } = useContext(InputContext);

  const myStorage = window.localStorage;

  const onChange = (e) => {
    if (!e.target.value.includes(COMIC_QUERY)) setInputComic('');
    setInput(e.target.value);
    return
  }

  const onPasteHandler = (e) => {
    let pastedURL = e.clipboardData.getData('Text');

    if (pastedURL.includes(COMIC_QUERY)) {
      setInputComic(getComicId(pastedURL));
    };
    return
  }

  const getFavList = () => {
    let keys = Object.keys(myStorage);
    keys = keys.filter(key => key.startsWith(HERO_ID_PREFIX));

    setFavList(keys.map(key => myStorage.getItem(key)).sort());
  }


  return (
    <SearchBar>
      <Separator />

      <MagnifierContainer>
        <i className="fas fa-search" style={{ color: "#A8A8A8" }}></i>
      </MagnifierContainer>

      <Input
        placeholder="Search"
        value={input}
        type="text"
        inputColor='black'
        list='favourites'
        onChange={onChange}
        onPaste={onPasteHandler}
        onFocus={getFavList}
      >
      </Input>
      <datalist id='favourites'>
        {
          favList.length
            ? favList.map(fav => <option key={fav} value={fav}>{fav}</option>)
            : null
        }
      </datalist>

      <MagnifierContainer>
        <i className="far fa-star" style={{ color: "#A8A8A8" }}></i>
      </MagnifierContainer>

      <Separator />
    </SearchBar>
  )
}



export default SearchBarContainer;