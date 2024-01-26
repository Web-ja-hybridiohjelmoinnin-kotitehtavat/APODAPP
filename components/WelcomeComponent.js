// WelcomeComponent.js

import React, { useRef, useEffect } from 'react'
import { Text, Button, Animated, View, StyleSheet } from 'react-native'

const WelcomeComponent = ({ navigation }) => {
  const opacityValueImage = useRef(new Animated.Value(0)).current
  const opacityValueTitle = useRef(new Animated.Value(0)).current
  const opacityValueSubtitleButtons = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    Animated.sequence([
      Animated.timing(opacityValueImage, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValueTitle, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValueSubtitleButtons, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start()
  }

  useEffect(() => {
    fadeIn()
  }, [])

  const navigateToLogin = () => {
    navigation.navigate('Login')
  }

  const navigateToRegister = () => {
    navigation.navigate('Register')
  }
  
  return (
    <View style={styles.container}>
      {/* Image component with opacity animation */}
      <Animated.Image
        source={require('../assets/NasaLogo.png')}
        style={[styles.image, { opacity: opacityValueImage }]}
      />
      {/* Title with opacity animation */}
      <Animated.Text style={[styles.title, { opacity: opacityValueTitle }]}>
        Welcome to APOD app
      </Animated.Text>
      {/* Subtitle and Buttons with shared opacity animation */}
      <Animated.View style={{ opacity: opacityValueSubtitleButtons }}>
        <Text style={styles.subtitle}>Please login or register to continue</Text>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={navigateToLogin} />
          <Button title="Register" onPress={navigateToRegister} />
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 500,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
  image: {
    width: '30%',
    height: '20%',
  },
  title: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default WelcomeComponent
