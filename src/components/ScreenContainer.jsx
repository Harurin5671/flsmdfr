import React from 'react'
import { View, StyleSheet } from 'react-native'

import SafeAreaWrapper from 'components/SafeAreaWrapper.jsx'

const ScreenContainer = ({ children }) => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 }
})

export default ScreenContainer
