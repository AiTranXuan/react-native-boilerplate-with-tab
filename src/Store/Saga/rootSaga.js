import { fork, all, takeLatest } from 'redux-saga/effects'
import { getUser } from '@/Store/User/userSaga'
import {
  setLoggedInAction,
  setLoggedOutAction,
  watchLogin,
} from '@/Store/App/appSaga'
const sagas = function* () {
  yield all([
    watchLogin,
    takeLatest('fetchOne', getUser),
    setLoggedInAction,
    setLoggedOutAction,
  ])
}
export default sagas
