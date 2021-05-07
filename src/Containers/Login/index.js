// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Login from './login'
import {
  watchLogin,
  setLoggedInAction,
  setLoggedOutAction,
} from '@/Store/App/appSaga'
import { selectLoginStatus } from '@/Selectors/AppSelector'
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: selectLoginStatus(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => {
      dispatch(watchLogin())
    },
    // actions: bindActionCreators(
    //   {
    //     setLoggedInAction,
    //     setLoggedOutAction,
    //   },
    //   dispatch,
    // ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
