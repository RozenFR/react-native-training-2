import React from "react";
import {deleteNote} from "../services/NoteStoreService";
import {Pressable} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {ScreenNavigationProp} from "../types";
import {useNavigation} from "@react-navigation/native";

type Props = {
    noteId: string
}

export const DeleteNote: React.FC<Props> = ({ noteId }) => {

    const navigation = useNavigation<ScreenNavigationProp>();

    const deleteNoteHandler = async () => {
        await deleteNote(noteId);
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }

    return (
        <Pressable onPress={deleteNoteHandler}>
            <FontAwesome name="trash-o" size={30} color="#ff0000" />
        </Pressable>
    )
}