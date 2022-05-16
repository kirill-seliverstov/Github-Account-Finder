import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './actionTypes';
import { FetchUser, FetchUserPayload, FetchUserSuccess, FetchUserError, FetchUserErrorPayload, FetchUserSuccessPayload } from './types';

export const fetchUser = (payload: FetchUserPayload): FetchUser => ({
    type: FETCH_USER,
    payload
})

export const fetchUserSuccess = (payload: FetchUserSuccessPayload): FetchUserSuccess => ({
    type: FETCH_USER_SUCCESS,
    payload
})

export const fetchUserError = (payload: FetchUserErrorPayload): FetchUserError => ({
    type: FETCH_USER_ERROR,
    payload
})
