import { HERO } from '../types';

const initialState = {
  heroes: [],
  loading: true,
  error: null,
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case HERO.REQUEST:
      console.log('HERO_REQUEST')
      return {
        ...state,
        loading: true,
      }
    case HERO.REQUEST_SUCCESS:
      console.log('HERO_REQUEST_SUCCESS')
      console.log('HEROREDUCER: ', state.heroes, action.payload.data.data.results)
      return {
        ...state,
        loading: false,
        heroes: [
          ...state.heroes,
          ...action.payload.data.data.results
        ],
        heroes_search: action.payload.data.data.results
      }
    case HERO.REQUEST_FAIL:
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

export default heroReducer;

