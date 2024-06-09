import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SafeAreaWrapper = ({ children, style }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[styles.container, style, {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1 // Asegura que el SafeAreaWrapper ocupe todo el espacio disponible
  }
})

export default SafeAreaWrapper
