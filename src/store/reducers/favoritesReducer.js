import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from '../actions/favoritesActions';
import { DELETE_MOVIE } from '../actions/movieActions';

const initialState = {
  favorites: [],
  displayFavorites: true,
};
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };

    case ADD_FAVORITE:
      const fav = state.favorites.find((item) => item.id === action.payload.id);
      if (fav) {
        return state;
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
