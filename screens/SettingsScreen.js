import React from 'react'
import { View, Button, StyleSheet, Text, StatusBar } from 'react-native'
import { useAuth } from '../functions/AuthHandler'

const SettingsScreen = ({ navigation }) => {
    const { handleLogout, email } = useAuth(navigation)

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>{email}</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '500'
  },
})

export default SettingsScreen

