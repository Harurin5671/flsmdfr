import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import TestScreen from 'screens/TestScreen.jsx'
import MainTabsNavigator from 'routes/MainTabsNavigator.jsx'

// const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

/**
 * AppNavigator Component
 *
 * Este componente configura la navegación principal de la aplicación,
 * combinando navegación por pestañas y navegación apilada.
 */

function AppNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainTabsNavigator' component={MainTabsNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Test' component={TestScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
