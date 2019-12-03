import { UPDATE_QUERY, FETCH_IMAGE_START, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAIL, SELECT_IMG } from "./actionType";
import { REACT_APP_UNSPLASH_API_KEY } from 'react-native-dotenv';

export const updateQuery = (text) => ({
  type: UPDATE_QUERY,
  payload: text,
});

export const selectImage = (id) => ({
  type: SELECT_IMG,
  payload: id,
});

const fetchImageStart = () => ({
  type: FETCH_IMAGE_START,
})

const fetchImageSuccess = (data) => ({
  type: FETCH_IMAGE_SUCCESS,
  payload: data,
})

const fetchImageFail = (err) => ({
  type: FETCH_IMAGE_FAIL,
  payload: err,
})

export const fetchImage = (query) => (dispatch) => {
  const defaultURL = 'https://api.unsplash.com/search/';
  console.log(REACT_APP_UNSPLASH_API_KEY)
  dispatch(fetchImageStart);
  const url = new URL(process.env.REACT_APP_UNSPLASH_API_URL || defaultURL);
  url.searchParams.append('query', query);
  url.searchParams.append('client_id', REACT_APP_UNSPLASH_API_KEY);
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((res) => {
      dispatch(fetchImageSuccess(res.photos.results))
    })
    .catch((err) => dispatch(fetchImageFail(err)));
};
