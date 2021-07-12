import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native'
import image from './assets/redDiamond.png';
import * as ImagePicker from 'expo-image-picker'

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  let openIMagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if(permissionResult.granted === false) {
      alert('Permission to access camera is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    if(pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image!</Text>
      <Image Pick an image={{uri: 'https://picsum.photos/200/200'}}
        source={ selectedImage !== null ? selectedImage.localUri : image}
        style={styles.image}
      />
      {/* <Button 
        color="red"
        title="Press me"
        onPress={() => Alert.alert('Hello world')}
      /> */}
      <TouchableOpacity
        onPress={() => openIMagePickerAsync()}
        style={styles.button}
      >
        <Text style={styles.buttonText} >Press Me</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#292929"
  },
  title: {
    fontSize: 30,
    color: "#fff"
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: 'deepskyblue',
    padding: 7,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  }
})

export default App