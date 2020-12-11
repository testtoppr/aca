import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SnackBar from './src/SnackBar'
import { Audio } from 'expo-av';

export default function App() {
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");

  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
}

  //function to hide snackbar
  function hideSnackBar() {
      setSnackBarVisible(false);
  }

  async function handeClick1(){
    displaySnackBar("success","This is an example of a snackbar");
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/ding1.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      await soundObject.unloadAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  async function handeClick2(){
    displaySnackBar("success","This is an example of a snackbar");
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/ding1.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      await soundObject.unloadAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  async function handeClick3(){
    displaySnackBar("success","This is an example of a snackbar");
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/ding1.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      await soundObject.unloadAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  async function handeClick4(){
    displaySnackBar("success","This is an example of a snackbar");
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/ding1.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!

      // Don't forget to unload the sound from memory
      // when you are done using the Sound object
      await soundObject.unloadAsync();
    } catch (error) {
      // An error occurred!
    }
  }
  return (
    <View style={styles.container}>
      <Button onPress={handeClick1} title="Button 1"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
      />
      <Button onPress={handeClick2} title="Button 2"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
      />
      <Button onPress={handeClick3} title="Button 3"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
      />
      <Button onPress={handeClick4} title="Button 4"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
      />
      {
                snackBarVisible ?
                    <SnackBar
                        isVisible={snackBarVisible}
                        text={snackBarText}
                        type={snackBarType}
                        onClose={hideSnackBar}
                    />
                    : null
            }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:"row"
  },
  button:{
    padding:10,
    borderRadius: 100
  }
});
