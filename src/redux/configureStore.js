import {createStore, combineReducers} from 'redux';
import { Players } from './players';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            players: Players
        })
    );

    return store;
}