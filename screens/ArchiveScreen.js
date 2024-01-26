import React, { useState } from 'react'
import { View, Button, ScrollView, ActivityIndicator, Text, StyleSheet } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker'
import ArchiveComponent from '../components/ArchiveComponent'
import { fetchDateApod } from '../functions/ApodApi'

const ArchiveScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const initialSelectedDate = new Date()
  initialSelectedDate.setDate(initialSelectedDate.getDate() - 1)

  const [selectedDate, setSelectedDate] = useState(initialSelectedDate)
  const [archiveData, setArchiveData] = useState(null)

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(new Date(date))
    }
  }

  const handleRenderButtonPress = async () => {
    setLoading(true)
    try {
      const data = await fetchDateApod(selectedDate)
      setArchiveData([data])
    } catch (error) {
      console.error('Error fetching APOD:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DatePicker
        style={styles.datePicker}
        value={selectedDate}
        mode="date"
        format="YYYY-MM-DD"
        minimumDate={new Date('1995-06-16')}
        maximumDate={new Date()}
        onChange={handleDateChange}
      />
      <Button title="Render Picture" onPress={handleRenderButtonPress} />

      {archiveData &&
        archiveData.map((data, index) => (
          <ArchiveComponent key={index} data={data} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        ))}
      {!archiveData && !loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Choose date and render picture!</Text>
        </View>
      )}
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 3 }}>
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
})


export default ArchiveScreen







