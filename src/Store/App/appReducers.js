import { AppTypes } from '@/Constants'

const initData = {
  isLoggedIn: false,
}

const appReducers = (state = initData, { type, payload }) => {
  switch (type) {
    case AppTypes.LOGGED_IN:
      return { ...state, isLoggedIn: true }
    case AppTypes.LOGGED_OUT:
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}
export default appReducers
