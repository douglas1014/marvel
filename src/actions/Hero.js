import md5 from 'js-md5';
import { PUB_KEY, PRIV_KEY } from '../environment';

import { HERO } from '../types';

export function getHeroes(offset) {
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(1 + PRIV_KEY + PUB_KEY)
  let url = `events/29/characters?ts=1&apikey=${PUB_KEY}&hash=${hash.hex()}&offset=${offset}`;
  /* if(text) url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUB_KEY}&hash=${hash.hex()}&nameStartsWith=${text}`
  if(!text) url = `events/29/characters?ts=1&apikey=${PUB_KEY}&hash=${hash.hex()}&offset=${offset}`; */
  
  console.log('URL: ', url);
  return {
    type: HERO.REQUEST,
    payload: {
      request: {
        url: url,
      }
    }
  };
}