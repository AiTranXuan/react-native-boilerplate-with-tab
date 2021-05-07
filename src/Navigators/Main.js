import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeScreen,
  AccountScreen,
  VoucherCouponScreen,
  MembershipScreen,
  StoresScreen,
} from '@/Containers'
import BottomTab from '@/Components/BottomTab'
import Screens from '@/Theme/Screens'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name={Screens.Home.id} component={HomeScreen} />
      <Tab.Screen
        name={Screens.VoucherCoupon.id}
        component={VoucherCouponScreen}
      />
      <Tab.Screen name={Screens.Membership.id} component={MembershipScreen} />
      <Tab.Screen name={Screens.Stores.id} component={StoresScreen} />
      <Tab.Screen name={Screens.Account.id} component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default MainNavigator
