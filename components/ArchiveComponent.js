import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback, Modal, StatusBar, StyleSheet } from 'react-native'
import { openModal, closeModal, handleLongPress, saveImageToPhone } from '../functions/ModalFunctions'

const ArchiveComponent = ({ data, modalVisible, setModalVisible }) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback
      onPress={() => openModal(setModalVisible)}
      onLongPress={() => handleLongPress(() => saveImageToPhone(data), data)}
    >
      <Image source={{ uri: data.url }} style={styles.image} />
    </TouchableWithoutFeedback>
    <Text style={styles.title}>{data.date}</Text>
    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.explanation}>{data.explanation}</Text>
    {data.copyright ? (
      <Text style={styles.title}>Image Credit & Copyright: {data.copyright}</Text>
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
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback
        onPress={() => closeModal(setModalVisible)}
        onLongPress={() => handleLongPress(() => saveImageToPhone(data), data)}
      >
        <View style={{ flex: 1 }}>
          <Image source={{ uri: data.url }} style={styles.modalImage} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  </View>
)

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
  })
  

export default ArchiveComponent
