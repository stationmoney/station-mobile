import React, { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import _ from 'lodash'

import { LAYOUT } from 'consts'

import Wallet from '../screens/TabWallet'
import Swap from '../screens/TabSwap'
import Staking from '../screens/TabStaking'

import { RootStack } from 'types/navigation'
import { Text, Icon } from 'components'
import { ArkitDemo } from '../screens/TabArkitDemo/index'

const WalletStack = (): ReactElement => (
  <RootStack.Navigator initialRouteName="Wallet">
    <RootStack.Screen
      name="Wallet"
      component={Wallet}
      options={Wallet.navigationOptions}
    />
  </RootStack.Navigator>
)

const StakingStack = (): ReactElement => (
  <RootStack.Navigator initialRouteName="Staking">
    <RootStack.Screen
      name="Staking"
      component={Staking}
      options={Staking.navigationOptions}
    />
  </RootStack.Navigator>
)

const ArkitDemoStack = (): ReactElement => (
  <RootStack.Navigator initialRouteName="Staking">
    <RootStack.Screen
      name="Staking"
      component={ArkitDemo}
      options={ArkitDemo.navigationOptions}
    />
  </RootStack.Navigator>
)

const SwapStack = (): ReactElement => (
  <RootStack.Navigator initialRouteName="Swap">
    <RootStack.Screen
      name="Swap"
      component={Swap}
      options={Swap.navigationOptions}
    />
  </RootStack.Navigator>
)

const styles = StyleSheet.create({
  tabbar_text: {
    fontSize: 9,
    marginBottom: 3,
  },
})

/* routes */
const Tab = createBottomTabNavigator()

const tabScreenItemList: {
  name: string
  component: () => ReactElement
  label: string
  iconName: string
}[] = [
  {
    name: 'WalletStack',
    component: WalletStack,
    label: 'WALLET',
    iconName: 'account-balance-wallet',
  },
  {
    name: 'SwapStack',
    component: SwapStack,
    label: 'SWAP',
    iconName: 'swap-horiz',
  },
  {
    name: 'StakingStack',
    component: StakingStack,
    label: 'STAKING',
    iconName: 'layers',
  },
  {
    name: 'ArkitDemoStack',
    component: ArkitDemoStack,
    label: 'ARKIT DEMO',
    iconName: 'adjust',
  },
]

const Tabs = (): ReactElement => {
  const tabBarLabelPosition =
    LAYOUT.getScreenWideType() === 'wide'
      ? 'beside-icon'
      : 'below-icon'
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2043B5',
        tabBarInactiveTintColor: '#C1C7D0',
        tabBarLabelPosition,
        headerShown: false,
      }}
    >
      {_.map(tabScreenItemList, (item, index) => (
        <Tab.Screen
          key={`tabScreenItemList-${index}`}
          name={item.name}
          component={item.component}
          options={(): BottomTabNavigationOptions => ({
            tabBarLabel:
              tabBarLabelPosition === 'below-icon'
                ? ({ color }: { color: string }): ReactElement => (
                    <Text
                      style={[styles.tabbar_text, { color }]}
                      fontType={'bold'}
                    >
                      {item.label}
                    </Text>
                  )
                : item.label,
            tabBarIcon: ({ color }: any): ReactElement => (
              <Icon
                name={item.iconName}
                color={color}
                size={26}
                style={
                  tabBarLabelPosition === 'below-icon' && {
                    marginTop: 5,
                  }
                }
              />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  )
}

export default Tabs
