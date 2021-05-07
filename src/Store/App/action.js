import { AppTypes } from '@/Constants'

export const setLoggedIn = () => {
  return {
    type: AppTypes.LOGGED_IN,
  }
}

export const setLoggedOut = () => {
  return {
    type: AppTypes.LOGGED_OUT,
    payload: {},
  }
}
