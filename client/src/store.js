import { createStore, combineReducers } from 'redux';
import { mangaUpdate } from './reducers/index.js';

const reducers = combineReducers({
    mangaUpdate,
});

const store = createStore(reducers);

export default store;