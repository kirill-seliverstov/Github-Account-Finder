import { all, fork } from "redux-saga/effects"
import { userWatcher } from "./users/sagas"

export function* rootSaga() {
    yield all([fork(userWatcher)])
}