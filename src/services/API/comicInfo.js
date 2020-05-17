
import { API_KEY, get } from '../config/index';
import { generateHash } from '../../utils';

const comicURI = '/comics/'

const createComicQueryURL = (id) => {
  const { ts, hash } = generateHash();
  return comicURI + id + '?apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hash;
}

export const fetchComic = (id) => {
  const comicQueryURL = createComicQueryURL(id);

  return get(comicQueryURL).then(res => res.data.data.results[0])
} 