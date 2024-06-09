import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from 'routes/AppNavigator'

export default function App () {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  )
}
