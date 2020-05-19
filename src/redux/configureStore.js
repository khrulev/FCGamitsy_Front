import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Players } from './players';
import { Comments } from './comments';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            players: Players,
            comments: Comments
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}