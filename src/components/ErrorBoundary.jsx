import React, { Component } from 'react'
import { Text } from 'react-native'

import ScreenContainer from 'components/ScreenContainer.jsx'

const defaultErrorElement = (
  <ScreenContainer>
    <Text>The app was about to crash, but I got ya!</Text>
  </ScreenContainer>
)

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    // Actualiza el estado para que el siguiente renderizado muestre la UI alternativa
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    // Puedes registrar el error en un servicio de reporte de errores
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return this.props.fallback || defaultErrorElement
    }

    return this.props.children
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     textAlign: 'center'
//   }
// })

export default ErrorBoundary
