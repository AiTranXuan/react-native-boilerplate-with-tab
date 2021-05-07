import { AppTypes } from '@/Constants'

export const setLoggedIn = () => {
  return {
    type: AppTypes.LOGGED_IN,
    payload: {},
  }
}

export const setLoggedOut = () => {
  return {
    type: AppTypes.LOGGED_OUT,
    payload: {},
  }
}
