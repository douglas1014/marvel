import { COMIC_IMAGE } from '../types';

const initialState = {
  comics: [],
  loading: true,
  error: null,
};

const comicImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMIC_IMAGE.REQUEST:
      console.log('COMIC_IMAGE_REQUEST')
      return {
        ...state,
        loading: true,
      }
    case COMIC_IMAGE.REQUEST_SUCCESS:
      console.log('COMIC_IMAGE_REQUEST_SUCCESS')
      return {
        ...state,
        loading: false,
        comics: [
          ...state,
          ...action.payload.data.data.results,
        ],
      }
    case COMIC_IMAGE.REQUEST_FAIL:
      // console.log('HERO.REQUEST_FAIL')
      // console.log(action)
      return {
        ...state,
        loading: false,
        error: 'Não foi possível buscar os dados',
      }
    default:
      return state
  };
};

export default comicImageReducer;

