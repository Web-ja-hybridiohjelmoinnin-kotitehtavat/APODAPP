import React, { useEffect } from 'react'
import { Button, StatusBar, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainComponent from '../components/MainComponent'
import SettingsScreen from './SettingsScreen' // Make sure to import SettingsScreen
import ArchiveScreen from './ArchiveScreen' // Make sure to import ArchiveScreen
import { useAuth } from '../functions/AuthHandler'

const Drawer = createDrawerNavigator()

export default function MainScreen({ navigation }) {
  const { email } = useAuth()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Astronomy Picture of the Day" component={MainComponent} options={{ drawerLabel: '🖼️ APOD' }} />
        <Drawer.Screen
          name="Archive"
          component={ArchiveScreen}
          options={{ drawerLabel: '🗃️ Archive' }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ drawerLabel: '⚙ Settings' }}
          initialParams={{ email }}
        />
      </Drawer.Navigator>
    </>
  )
}


