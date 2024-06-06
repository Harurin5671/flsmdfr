import React from 'react'
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import DismissKeyboard from 'components/DismissKeyboard.jsx'
import CustomScrollView from 'components/CustomScrollView'

const HomeScreen = ({ navigation }) => {
  return (
    <DismissKeyboard>
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: 'cover'
        }} source={require('assets/images/png/background.png')}
      >

        <View style={{ height: '35%' }} />
        <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 80, overflow: 'hidden' }}>
          <CustomScrollView>
            <View>
              <View style={styles.containerLogin}>
                <View style={{ height: 70 }} />
                <Text style={styles.title}>Login</Text>
                <View style={{ height: 9 }} />
                <Text style={styles.subtitle}>Sign in to continue</Text>
                <View style={styles.formInput}>
                  <Text style={styles.subtitle}>E M A I L</Text>
                  <View style={{ height: 5 }} />
                  <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#8F8E8E'
                    keyboardType='email-address'
                    autoCapitalize='none'
                  />
                  <View style={{ height: 11 }} />
                  <Text style={styles.subtitle}>P A S S W O R D</Text>
                  <View style={{ height: 5 }} />
                  <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#8F8E8E'
                    secureTextEntry
                    autoCapitalize='none'
                  />
                  <TouchableOpacity
                    style={styles.button}
                    // onPress={handleLogin}
                    onPress={() => navigation.navigate('Details')}
                  >
                    <Text style={styles.buttonText}>Log in</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ height: 45 }} />
                <Text style={{ color: '#8F8E8E' }}>Forgot Password?</Text>
                <View style={{ height: 8 }} />
                <Text style={{ color: '#8F8E8E' }}>Sign up!</Text>
              </View>
            </View>
          </CustomScrollView>
        </View>
      </ImageBackground>
    </DismissKeyboard>

  )
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: { flex: 1, width: '100%', backgroundColor: '#2A364E' },
  containerSeparator: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 85,
    height: 85,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  image: {
    width: 100,
    height: 100
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#fff',
    // borderTopRightRadius: 60,
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    width: '100%',
    paddingHorizontal: 20
  },
  title: { fontSize: 35.7, fontWeight: 'bold', color: '#1C2120' },
  subtitle: { fontSize: 10.5, fontWeight: 'bold', color: '#8F8E8E' },
  formInput: {
    width: '70%',
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: '#8F8E8E',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    color: '#1C2120',
    elevation: 5
  },
  button: {
    height: 40,
    backgroundColor: '#1C2120',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 10.9
  }
})

export default HomeScreen
