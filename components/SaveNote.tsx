import React from 'react';
import {Pressable} from "react-native";
import {Note, saveNote} from "../services/NoteStoreService";
import {useNavigation} from "@react-navigation/native";
import {ScreenNavigationProp} from "../types";
import {Ionicons} from "@expo/vector-icons";

export const SaveNote: React.FC<Note> = ({ id, text }) => {

    const navigation = useNavigation<ScreenNavigationProp>();

    const saveNoteHandler = async () => {
        await saveNote(id, text);
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }

    return (
        <Pressable onPress={saveNoteHandler}>
            <Ionicons name="chevron-back" size={30} color="#ffb703" />
        </Pressable>
    );
};