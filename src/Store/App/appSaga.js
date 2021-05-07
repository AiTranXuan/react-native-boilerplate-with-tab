import { call, put, select, takeLatest } from 'redux-saga/effects'
import { FetchOneUserService } from '@/Services/User/index'
import { AppTypes } from '@/Constants'

export function* setLoggedInAction() {
  try {
    yield put({ type: AppTypes.LOGGED_IN })
  } catch (error) {
    console.log('err  ------------->', error)
  }
}

export function* setLoggedOutAction() {
  try {
    yield put({ type: AppTypes.LOGGED_OUT })
  } catch (error) {
    console.log('err  ------------->', error)
  }
}

export function* watchLogin() {
  try {
    yield takeLatest(AppTypes.LOGGED_IN)
  } catch (error) {
    console.log('err  ------------->', error)
  }
}
