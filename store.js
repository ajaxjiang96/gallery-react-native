import reducer from './redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));
