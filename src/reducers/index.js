import { combineReducers } from 'redux'

import heroReducer from './Hero'
import comicImageReducer from './Comic';

export default combineReducers({
  hero: heroReducer,
  comic_image: comicImageReducer
});