import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, StatusBar } from 'react-native'
import LoginComponent from '../components/LoginComponent'

export default function LoginScreen({ setLogged, navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          placeholder="Enter your password"
        />

        <Button title="Login" onPress={() => LoginComponent.handleLogin(email, password, setLogged, navigation)} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
})
