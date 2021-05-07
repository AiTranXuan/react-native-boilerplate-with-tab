import Screens from '@/Theme/Screens'
import React from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { navigate, navigateAndSimpleReset } from '../../Navigators/Root'

const LoginScreen = props => {
  console.log('isLoggedIn: ', props.isLoggedIn)

  const handleLogin = () => {
    props.actions.setLoggedInAction()
    // navigateAndSimpleReset(Screens.Home.id)
  }

  const handleRegister = () => {
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
