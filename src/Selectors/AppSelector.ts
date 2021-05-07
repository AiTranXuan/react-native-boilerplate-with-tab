;import {get} from 'lodash';

export const selectApp = (state) => get(state, 'app');

export const selectLoginStatus = (state) => get(selectApp(state), 'isLoggedIn');
 
export default {
  selectLoginStatus,
};
