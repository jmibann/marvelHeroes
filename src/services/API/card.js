import { API_KEY, get } from '../config/index';

import { generateHash } from '../utils';

const HeroURL = '/characters/';

const createHeroQueryURL = ({ id }) => {
  const { ts, hash } = generateHash();
  return HeroURL + id + '?apikey=' + API_KEY + "&ts=" + ts + "&hash=" + hash
};

export const fetchHero = (id) => {
  const HeroQueryURL = createHeroQueryURL({ id });

  return get(HeroQueryURL).then(res => res.data.data.results)
};