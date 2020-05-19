import * as ActionTypes from './ActionTypes';

export const Players = (state = {isLoading: true,
        errMess: null,
        players:[]} , action) => {
    switch (action.type) {
        case ActionTypes.ADD_PLAYERS:
            return {...state, isLoading: false, errMess: null, players: action.payload};
        case ActionTypes.PLAYERS_LOADING:
            return {...state, isLoading: true, errMess: null, players: []}
        case ActionTypes.PLAYERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
          return state;
      }
};