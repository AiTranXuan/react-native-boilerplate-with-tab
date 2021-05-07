import { fork, all, takeLatest } from 'redux-saga/effects'
import { getUser } from '@/Store/User/userSaga'
import { setLoggedInAction, setLoggedOutAction } from '@/Store/App/appSaga'
const sagas = function* () {
  yield all([
    takeLatest('fetchOne', getUser, setLoggedInAction, setLoggedOutAction),
  ])
}
export default sagas
