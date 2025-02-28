import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NoteTakingInput} from "./components/NoteTakingInput";
import {HomeScreen} from "./components/HomeScreen";

export default function App() {

  const [shouldCreateNewNote, setShouldCreateNewNote] = useState<boolean>(false);

  const saveNote = async (text: string) => {
    await AsyncStorage.setItem('note', text);
    setShouldCreateNewNote(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        shouldCreateNewNote ? (
          <NoteTakingInput saveNote={saveNote} />
        ) : (
          <HomeScreen toggleNewNote={setShouldCreateNewNote} />
        )
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
  }
});
