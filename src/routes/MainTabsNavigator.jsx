import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LocationScreen from 'screens/LocationScreen.jsx'
import ExperienceScreen from 'screens/ExperienceScreen.jsx'
import MenuScreen from 'screens/MenuScreen.jsx'
// import ProfileScreen from 'screens/ProfileScreen.jsx'
import SearchScreen from 'screens/SearchScreen.jsx'
import tabIcons from 'constants/tabIcons.js'
import AuthNavigator from 'routes/AuthNavigator.jsx'

const Tab = createBottomTabNavigator()

/**
 * MainTabs Component
 *
 * Este componente configura las pestañas principales de la aplicación.
 * Cada pestaña está asociada a una pantalla diferente.
 */

const MainTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: styles.container,
      tabBarItemStyle: styles.screenStyle,
      tabBarInactiveTintColor: '#808080'
    }}
    >
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerShown: false,
          title: 'SEARCH',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? tabIcons.search.active : tabIcons.search.default}
              style={styles.icon}
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
              style={styles.icon}
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
              style={styles.icon}
            />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={AuthNavigator}
        options={{
          headerShown: false,
          title: 'PROFILE',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? tabIcons.profile.active : tabIcons.profile.default}
              style={styles.icon}
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
              style={styles.icon}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    marginVertical: 6
  },
  icon: { width: 24, height: 24 }
})

export default MainTabsNavigator
