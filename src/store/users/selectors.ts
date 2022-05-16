import { createSelector } from 'reselect'
import { RootState } from '../rootReducer';

const getUser = (state: RootState) => state.user.user;

const getUserLoading = (state: RootState) => state.user.userLoading;

const getUserError = (state: RootState) => state.user.userError;

export const getUserSelector = createSelector(getUser, (user) => user)

export const getUserLoadingSelector = createSelector(getUserLoading, (userLoading) => userLoading)

export const getUserErrorSelector = createSelector(getUserError, (userError) => userError)

