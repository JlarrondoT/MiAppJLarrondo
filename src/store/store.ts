import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './reducers/book.reducer';

const rootReducer = combineReducers({
  activeBook: bookReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
