import md5 from 'js-md5';
import { PUB_KEY, PRIV_KEY } from '../environment';

import { HERO } from '../types';

export function getHeroes(offset, text) {
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(1 + PRIV_KEY + PUB_KEY)
  let url = ``;
  if(text) url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${text}`
  if(!text) url = `events/29/characters?ts=1&apikey=${PUB_KEY}&hash=${hash.hex()}&offset=${offset}`;
  return {
    type: HERO.REQUEST,
    payload: {
      request: {
        url: url,
      }
    }
  };
}