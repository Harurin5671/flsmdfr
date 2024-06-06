import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from 'screens/HomeScreen.jsx'
import LocationScreen from 'screens/LocationScreen.jsx'
import ExperienceScreen from 'screens/ExperienceScreen.jsx'
import MenuScreen from 'screens/MenuScreen.jsx'
import ProfileScreen from 'screens/ProfileScreen.jsx'
import SearchScreen from 'screens/SearchScreen.jsx'
import DetailScreen from 'screens/DetailScreen.jsx'
import tabIcons from 'constants/tabIcons.js'
import { Image } from 'react-native'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

/**
 * MainTabs Component
 *
 * Este componente configura las pestañas principales de la aplicación.
 * Cada pestaña está asociada a una pantalla diferente.
 */

function MainTabs () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerShown: false,
          title: 'SEARCH',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? tabIcons.search.active : tabIcons.search.default}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tab.Screen
        name='Location'
        component={LocationScreen}
        options={{
          headerShown: false,
          title: 'LOCATION',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? tabIcons.location.active : tabIcons.location.default}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tab.Screen
        name='Experience'
        component={ExperienceScreen}
        options={{
          headerShown: false,
          title: 'EXPERIENCE',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? tabIcons.experience.active : tabIcons.experience.default}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: 'PROFILE',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? tabIcons.profile.active : tabIcons.profile.default}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tab.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          headerShown: false,
          title: 'MENU',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? tabIcons.menu.active : tabIcons.menu.default}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

/**
 * AppNavigator Component
 *
 * Este componente configura la navegación principal de la aplicación,
 * combinando navegación por pestañas y navegación apilada.
 */

function AppNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainTabs' component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name='Details' component={DetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
