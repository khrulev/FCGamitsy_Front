import * as ActionTypes from './ActionTypes';
import { PLAYERS } from '../shared/players';

export const addComment = (author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        author: author,
        comment: comment
    }
});

//+++++++ Players middleware by Redux THUNK
export const fetchPlayers = () => (dispatch) => {
    dispatch(playersLoading(true));
    setTimeout( () => {
            dispatch(addPlayers(PLAYERS))
        }, 2000);
}

export const playersLoading = () => ({
    type: ActionTypes.PLAYERS_LOADING
});

export const playersFailed = (errmess) => ({
    type: ActionTypes.PLAYERS_FAILED,
    payload: errmess
});

export const addPlayers = (players) => ({
    type: ActionTypes.ADD_PLAYERS,
    payload: players
});
