import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SnackBar from './src/SnackBar'

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

  function handeClick(){
    displaySnackBar("success","Hello testing");
  }
  return (
    <View style={styles.container}>
      <Button onPress={handeClick} title="Click Me"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
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
    justifyContent: 'center',
  },
});
