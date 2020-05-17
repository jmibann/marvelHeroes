import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';

const createComicQueryURL = (url) => {
  const { ts, hash } = generateHash();
  return url + '?apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hash
};


export const fetchComic = (uri) => {
  const ComicQueryURL = createComicQueryURL(uri);

  return get(ComicQueryURL)
    .then(res => res.data.data.results[0])
    .then(({ title, description, thumbnail }) => ({ title, description, thumbnail }))
};