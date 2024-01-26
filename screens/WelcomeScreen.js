// WelcomeScreen.js

import React from 'react'
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native'
import WelcomeComponent from '../components/WelcomeComponent'

const WelcomeScreen = ({ navigation }) => {


  return (
    <ImageBackground
      source={require('../assets/WelcomeBackground2.jpg')}
      style={styles.backgroundImage}
    >
      <StatusBar barStyle="light-content" />
        <WelcomeComponent navigation={navigation} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})

export default WelcomeScreen



