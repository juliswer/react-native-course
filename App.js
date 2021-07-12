import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import image from './assets/redDiamond.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to camara roll is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    // console.log(pickerResult)

    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === "web") {
      let remoteUri = await uploadAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri });
    }
  };

  const openShareDialog = async () => {
    if(!(await Sharing.isAvailableAsync())) {
      alert("Sharing is not available on your platform")
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image!</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync()} 
      >
      <Image Pick an image={{uri: 'https://picsum.photos/200/200'}}
        source={ selectedImage !== null ? selectedImage.localUri : image}
        style={styles.image}
      />
      </TouchableOpacity>
      {/* <Button 
        color="red"
        title="Press me"
        onPress={() => Alert.alert('Hello world')}
      /> */}
      {
        selectedImage ? (
        <TouchableOpacity
          onPress={() => openShareDialog()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Share this image</Text>
        </TouchableOpacity>
        ) : (
          <View />
        )
      }

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