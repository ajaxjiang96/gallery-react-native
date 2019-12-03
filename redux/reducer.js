import { UPDATE_QUERY, FETCH_IMAGE_START, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAIL, SELECT_IMG } from "./actionType";
import data from './data.json';

const initState = {
  query: 'Minimal',
  index: 0,
  loading: false,
  images: data.photos.results
}

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case FETCH_IMAGE_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload
      };
    case FETCH_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SELECT_IMG:
      return {
        ...state,
        index: action.payload
      }
    default:
      return state;
  }
};
