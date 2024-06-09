import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'screens/auth/LoginScreen.jsx'
import SignUpScreen from 'screens/auth/SignUpScreen.jsx'

const Stack = createStackNavigator()

/**
 * AuthNavigator Component
 *
 * Este componente configura la navegación para las pantallas de autenticación,
 * incluyendo inicio de sesión y registro.
 */

function AuthNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
