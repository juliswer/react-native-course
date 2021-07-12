import React from 'react';
import {Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native'
import image from './assets/redDiamond.png'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world!</Text>
      <Image 
        // source={{uri: 'https://picsum.photos/200/200'}}
        source={image}
        style={styles.image}
      />
      {/* <Button 
        color="red"
        title="Press me"
        onPress={() => Alert.alert('Hello world')}
      /> */}
      <TouchableOpacity
        onPress={() => Alert.alert('Hello world')}
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
    width: 200
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