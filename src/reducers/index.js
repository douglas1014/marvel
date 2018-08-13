import { combineReducers } from 'redux'

import heroReducer from './Hero'
import comicImageReducer from './Comic';
import searchReducer from './Search';

export default combineReducers({
  hero: heroReducer,
  comic_image: comicImageReducer,
  search: searchReducer
});