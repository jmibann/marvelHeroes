import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';

const searchHeroesURI = '/characters?nameStartsWith=';

const createSearchURL = (input) => {
  const { ts, hash } = generateHash();
  return searchHeroesURI + input.toLowerCase() + '&orderBy=name&apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hash;
}

const extractInfo = (heroArray) => {
  return heroArray.map(hero => ({
    id: hero.id,
    name: hero.name,
    thumbnail: hero.thumbnail,
    comics: hero.comics.items
  })
  )
}

export const fetchSearchResult = (input) => {

  const searchURL = createSearchURL(input);

  return get(searchURL)
    .then(res => res.data.data.results)
    .then(res => extractInfo(res))
}