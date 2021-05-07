import { call, put, select } from 'redux-saga/effects'
import { FetchOneUserService } from '@/Services/User/index'
import { AppTypes } from '@/Constants'

function* setLoggedInAction() {
  try {
    yield put({ type: AppTypes.LOGGED_IN })
  } catch (error) {
    console.log('err  ------------->', error)
  }
}

function* setLoggedOutAction() {
  try {
    yield put({ type: AppTypes.LOGGED_OUT })
  } catch (error) {
    console.log('err  ------------->', error)
  }
}
