import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './actionTypes';
import { Reducer } from "redux";
import { UserAction, UserState } from "./types";

const initialState: UserState = {
    user: null,
    userError: null,
    userLoading: false,
    public_repos: 0
}

export const usersReducer: Reducer<UserState, UserAction> = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, userLoading: true }
        case FETCH_USER_SUCCESS:
            return { ...state, userLoading: false, userError: null, user: action.payload.user, public_repos: action.payload.user.public_repos }
        case FETCH_USER_ERROR:
            return { ...state, userLoading: false, userError: action.payload.userError }
        default:
            return state
    }
}