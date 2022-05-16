import { AnyAction } from 'redux';
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './actionTypes';

export interface UserState {
    user: User | null;
    userError: string | null;
    userLoading: boolean;
    public_repos: number
}

export interface User {
    id: number;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    login: string;
    name: string;
    public_repos: number;
}

export interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export interface FetchUserPayload {
    user: string;
}

export interface FetchUserSuccessPayload {
    user: User;
}

export interface FetchUserErrorPayload {
    userError: string;
}

export type FetchUser = {
    type: typeof FETCH_USER,
    payload: FetchUserPayload
}

export type FetchUserSuccess = {
    type: typeof FETCH_USER_SUCCESS,
    payload: FetchUserSuccessPayload
}

export type FetchUserError = {
    type: typeof FETCH_USER_ERROR,
    payload: FetchUserErrorPayload
}

export type UserAction = FetchUser | FetchUserSuccess | FetchUserError 