import CryptoJS from 'crypto-js';

import { API_KEY, PRIV_KEY } from '../services/config';

export const HERO_ID_PREFIX = 'HERO_ID_PREFIX';
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];

export const generateHash = () => {
  const ts = new Date().getTime();
  let hash = CryptoJS.MD5(ts + PRIV_KEY + API_KEY);
  hash = hash.toString(CryptoJS.enc.Hex);

  return { ts, hash }
};

export const dateFormatter = (string) => {
  let numbers = string.split('T');
  numbers = numbers[0].split('-');

  const year = numbers[0];
  const month = parseInt(numbers[1]) - 1;
  const day = numbers[2];

  return `${MONTH[month]} ${day}, ${year}`;
}

export const buildKey = (id) => {
  return `HERO_ID_PREFIX_${id}`;
}