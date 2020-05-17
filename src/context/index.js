import React from 'react';

const input = {
  search: ''
}

export const InputContext = React.createContext({
  input: input.search,
  setInput: () => { },
  setInputComic: () => { }
})