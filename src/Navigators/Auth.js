import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ForgotPasswordScreen, LoginScreen, RegisterScreen } from '@/Containers'
import Screens from '@/Theme/Screens'

const AuthStack = createStackNavigator()
const Stack = createStackNavigator()

// @refresh reset
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <Stack.Screen name={Screens.Login.id} component={LoginScreen} />
      <Stack.Screen
        name={Screens.ForgotPassword.id}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={Screens.Register.id} component={RegisterScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
