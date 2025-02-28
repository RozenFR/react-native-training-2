import React, {useEffect, useLayoutEffect, useState} from "react";
import {StyleSheet, TextInput} from "react-native";
import {getNote} from "../services/NoteStoreService";
import {useNavigation} from "@react-navigation/native";
import {ScreenNavigationProp} from "../types";
import {SaveNote} from "./SaveNote";

type Props = {
    noteId?: string;
}

export const NoteTakingInput: React.FC<Props> = ({noteId}) => {

    const [text, setText] = useState<string>('');
    const navigation = useNavigation<ScreenNavigationProp>();

    // Extracted function for rendering SaveNote button
    const renderSaveNoteButton = () => {
        return <SaveNote id={noteId ?? ''} text={text} />;
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => renderSaveNoteButton()
        })
    }, [navigation, text, noteId]);

    useEffect(() => {
        if (noteId) {
            getNote(noteId).then((result) => setText(result?.text ?? ''));
        }
    }, []);

    return (
        <TextInput
            multiline={true}
            style={styles.textInput}
            value={text}
            onChangeText={setText}
            autoFocus={true}
        ></TextInput>
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
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20
    }
});