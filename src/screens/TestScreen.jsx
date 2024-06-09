import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import ScreenContainer from 'components/ScreenContainer.jsx'
import ErrorBoundary from '../components/ErrorBoundary'

const FaultyComponent = ({ navigation }) => {
  const [throwError, setThrowError] = useState(false)

  if (throwError) {
    throw new Error('This is a test error')
  }

  return (
    <View>
      <Text>This component will throw an error when the button is pressed</Text>
      <Button title='Throw Error' onPress={() => setThrowError(true)} />
    </View>
  )
}

const TestScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ErrorBoundary
        fallback={
          <View>
            <Text>Ups! Something went wrong</Text>
            <Text>
              Our team has been notified and will get this fixed for you ASAP
            </Text>
            <Button title='Go back' onPress={() => navigation.goBack()} />
          </View>
      }
      >
        <Text>This is a test screen</Text>
        <FaultyComponent navigation={navigation} />
      </ErrorBoundary>
    </ScreenContainer>
  )
}

// const styles = StyleSheet.create({
// })

export default TestScreen
