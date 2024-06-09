import { useNavigation } from '@react-navigation/native'

const useNavigationHandler = () => {
  const navigation = useNavigation()

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName)
  }

  return { navigateToScreen }
}

export default useNavigationHandler
