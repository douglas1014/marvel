import { SEARCH } from '../types';

const initialState = {
  heroes_search: [],
  loading: true,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH.REQUEST:
      console.log('SEARCH_REQUEST')
      return {
        ...state,
        loading: true,
      }
    case SEARCH.REQUEST_SUCCESS:
      console.log('SEARCH_REQUEST_SUCCESS')
      return {
        ...state,
        loading: false,
        heroes_search: action.payload.data.data.results,
      }
    case SEARCH.REQUEST_FAIL:
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

export default searchReducer;

