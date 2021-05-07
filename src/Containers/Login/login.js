import { AppTypes } from '@/Constants'
import { watchLogin } from '@/Store/App/appSaga'
import Screens from '@/Theme/Screens'
import React from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { navigate, navigateAndSimpleReset } from '../../Navigators/Root'

const LoginScreen = props => {
  const dispatch = useDispatch()

  // console.log('isLoggedIn: ', props.isLoggedIn)

  const handleLogin = () => {
    dispatch({ type: AppTypes.LOGGED_IN })
    // navigateAndSimpleReset(Screens.Home.id)
  }

  const handleRegister = () => {
    // dispatch({ type: AppTypes.LOGGED_OUT })
    navigate(Screens.Register.id)
  }

  const handleForgotPassword = () => {
    navigate(Screens.ForgotPassword.id)
  }
  // const handleChangeText = type => result => {
  //   console.log('type: ', type, 'result: ', result)
  // }
  return (
    <View style={{ flex: 1 }}>
      <Text>LoginScreen</Text>
      {/* <TextInput
        style={{ width: 210, height: 40, backgroundColor: 'red' }}
        onChangeText={handleChangeText('Input1')}
      />
      <TextInput
        style={{ width: 210, height: 40, backgroundColor: 'green' }}
        onChangeText={handleChangeText('Input2')}
      /> */}

      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="ForgotPassword" onPress={handleForgotPassword} />
    </View>
  )
}

export default LoginScreen
