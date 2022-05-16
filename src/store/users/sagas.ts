import { FETCH_USER } from './actionTypes';
import { fetchUserSuccess, fetchUserError, fetchUser } from './actions';
import { FetchUser } from './types';
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

const getUser = (user: string) => axios.get(`https://api.github.com/users/${user}`)

function* fetchUserSaga({ payload }: ReturnType<typeof fetchUser>) {
    try {
        const userData: AxiosResponse = yield call(getUser, payload.user)

        yield put(fetchUserSuccess({
            user: userData.data
        }))


    } catch (e) {
        yield put(fetchUserError({
            userError: 'Error'
        }))
    }
}

export function* userWatcher() {
    yield all([takeLatest(FETCH_USER, fetchUserSaga)]);
}
