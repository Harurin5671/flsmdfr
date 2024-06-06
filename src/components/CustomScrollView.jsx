import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const CustomScrollView = ({ horizontal = false, children }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      horizontal={horizontal}
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flexGrow: 1 }
})

export default CustomScrollView
