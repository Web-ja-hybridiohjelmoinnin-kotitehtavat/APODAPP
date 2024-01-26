import * as MediaLibrary from 'expo-media-library'
import * as ScreenOrientation from 'expo-screen-orientation'
import { Alert } from 'react-native'

export const openModal = async (setModalVisible) => {
  setModalVisible(true)
  await ScreenOrientation.unlockAsync()
}

export const closeModal = async (setModalVisible) => {
  setModalVisible(false)
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
}

export const handleLongPress = (saveImageToPhone) => {
  Alert.alert('Save Image', 'Do you want to save this image to your phone?', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'Save',
      onPress: saveImageToPhone,
    },
  ])
}

export const saveImageToPhone = async (apodData) => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status === 'granted') {
      const asset = await MediaLibrary.saveToLibraryAsync(apodData.url)
      Alert.alert('Image Saved', 'The image has been saved to your phone.')
    } else {
      Alert.alert('Permission Denied', 'Permission to access media library was denied.')
    }
  } catch (error) {
    console.error('Error saving image:', error)
  }
}
