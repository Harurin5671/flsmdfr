import React from 'react'
import { Text, Button } from 'react-native'

import ScreenContainer from 'components/ScreenContainer.jsx'

const SearchScreen = ({ navigation }) => {
  const handleNavigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }

  return (
    <ScreenContainer>
      <Text>SearchScreen</Text>
      <Button
        title='Go to Test Screen'
        onPress={() => handleNavigateToScreen('Test')}
      />
    </ScreenContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {}
// })

export default SearchScreen
