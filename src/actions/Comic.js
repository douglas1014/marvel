import md5 from 'js-md5';
import { PUB_KEY, PRIV_KEY } from '../environment';
import { COMIC_IMAGE } from '../types';

export function getComicImage() {
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + PRIV_KEY + PUB_KEY)

  return {
    type: COMIC_IMAGE.REQUEST,
    payload: {
      request: {
        url: `/ts=${timestamp}&apikey=${PUB_KEY}&hash=${hash.hex()}`
      }
    }
  };
}