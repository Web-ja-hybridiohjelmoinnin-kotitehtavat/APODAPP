import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ActivityIndicator, View } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MainScreen from './screens/MainScreen'
import { useAuth } from './functions/AuthHandler'


const Stack = createStackNavigator()

export default function App() {
  const { logged, initializing, setLogged } = useAuth()

  if (initializing) {
    return  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
  }

  const initialRouteName = logged ? 'Main' : 'Welcome'

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen 
          name="Welcome" 
          options={{
             headerShown: false
            }} 
          >
             {(props) => <WelcomeScreen {...props} />}
             </Stack.Screen>
        <Stack.Screen
          name="Login"
          options={{
            headerBackTitle: 'Back',
          }}
        >
          {(props) => <LoginScreen {...props} setLogged={setLogged} />}
        </Stack.Screen>
        <Stack.Screen
          name="Register"
          options={{
            headerBackTitle: 'Back',
          }}
        >
          {(props) => <RegisterScreen {...props} setLogged={setLogged} />}
        </Stack.Screen>
        <Stack.Screen 
        name="Main" 
        >
          {(props) => <MainScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


