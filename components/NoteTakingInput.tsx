import React, {useState} from "react";
import {Button, StyleSheet, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
    saveNote: (text: string) => void;
}

export const NoteTakingInput: React.FC<Props> = ({saveNote}) => {

    const [text, setText] = useState<string>('');

    return (
        <>
            <TextInput multiline={true} style={styles.textInput} value={text} onChangeText={setText}></TextInput>
            <Button title="Save note" onPress={() => saveNote(text)}></Button>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: '#ffb70342',
        width: '100%',
        height: 200,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20
    }
});