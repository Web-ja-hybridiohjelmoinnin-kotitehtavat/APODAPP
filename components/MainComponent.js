import React, { useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet, Modal, TouchableWithoutFeedback, ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import { openModal, closeModal, handleLongPress, saveImageToPhone } from '../functions/ModalFunctions'
import { fetchApod } from '../functions/ApodApi'

export default function MainComponent() {
  const [apodData, setApodData] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApod()
        setApodData(data)
        console.log(data)
      } catch (error) {
        console.error('Error in Main component:', error)
      }
    }

    fetchData()
  }, [])



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {apodData ? (
        <>
          <TouchableWithoutFeedback onPress={() => openModal(setModalVisible)} onLongPress={() => handleLongPress(() => saveImageToPhone(apodData))}>
            <Image source={{ uri: apodData.url }} style={styles.image} />
          </TouchableWithoutFeedback>
          <Text style={styles.title}>{apodData.date}</Text>
          <Text style={styles.title}>{apodData.title}</Text>
          <Text style={styles.explanation}>{apodData.explanation}</Text>
          {apodData.copyright ? (
            <Text style={styles.title}>Image Credit & Copyright: {apodData.copyright}</Text>
          ) : (
            <Text style={styles.title}>Image Credit: NASA</Text>
          )}

          <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => closeModal(setModalVisible)}
            supportedOrientations={['portrait', 'landscape']}
          >
            <StatusBar barStyle='light-content' />
            <TouchableWithoutFeedback onPress={() => closeModal(setModalVisible)} onLongPress={() => handleLongPress(() => saveImageToPhone(apodData))}>
              <View style={{ flex: 1 }}>
                <Image source={{ uri: apodData.url }} style={styles.modalImage} />
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  explanation: {
    fontSize: 16,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: 'gray',
  },
})

