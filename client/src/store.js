import { createStore, combineReducers } from 'redux';

import { mangaUpdate, mangaTop } from './reducers/index.js';

const reducers = combineReducers({
    mangaUpdate,
    mangaTop,
});

const store = createStore(reducers);

export default store;