import Axios from 'axios';

import { selectRandomHeroes, createRandomHeroQueryURL } from './utils';

const HEROES_QTY = 8;


export const fetchRandomHeroes = () => {

  const RandomHeroQueryURL = createRandomHeroQueryURL();

  return Axios.get(RandomHeroQueryURL)
    .then(res => res.data.data.results)
    .then(heroesArray => selectRandomHeroes({ heroesArray, quantity: HEROES_QTY }))
}