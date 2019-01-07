import { createStore, combineReducers } from 'redux';
import { mangaUpdate, user } from './reducers/index.js';

const reducers = combineReducers({
    mangaUpdate,
    user,
});

const store = createStore(reducers);

export default store;