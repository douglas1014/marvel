import md5 from 'js-md5';
import { PUB_KEY, PRIV_KEY } from '../environment';

import { SEARCH } from '../types';

export function getHeroesSearch(text) {
  const hash = md5.create();
  hash.update(1 + PRIV_KEY + PUB_KEY)
  const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUB_KEY}&hash=${hash.hex()}&nameStartsWith=${text}`
  return {
    type: SEARCH.REQUEST,
    payload: {
      request: {
        url: url,
      }
    }
  };
}