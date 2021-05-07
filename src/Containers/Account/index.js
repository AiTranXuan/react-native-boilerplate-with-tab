import { AppTypes } from '@/Constants'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

const AccountScreen = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch({ type: AppTypes.LOGGED_OUT })
    // navigate(Screens.Register.id)
  }
  return (
    <View style={{ flex: 1 }}>
      <Text>AccountScreen</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default AccountScreen
