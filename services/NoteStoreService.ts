import AsyncStorage from "@react-native-async-storage/async-storage";

export type Note = {
    id: string,
    text: string
};

export type NoteStore = {
    notes: Note[]
};

const STORE_KEY = 'TAKE_NOTES_STORE';

export const getAllNotes = async () => {
    const storeItem = await AsyncStorage.getItem(STORE_KEY);
    if (storeItem) {
        return JSON.parse(storeItem) as NoteStore;
    }
    return {notes: []};
};

export const getNote = async (id: string) => {
    const noteStore = await getAllNotes();
    return noteStore.notes.find(note => note.id === id);
};

export const saveNote = async (noteId: string | undefined, text: string) => {
    const noteStore = await getAllNotes();
    if (noteId) {
        // Edit
        const noteIndex = noteStore.notes.findIndex(note => note.id === noteId);
        noteStore.notes.splice(noteIndex, 1, { id: noteId, text });
    } else {
        // Add
        noteStore.notes.push({ id: Date.now().toString(), text });
    }
    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore));
};

export const deleteNote = async (noteId: string) => {
    const noteStore = await getAllNotes();
    const noteIndex = noteStore.notes.findIndex(note => note.id === noteId);
    noteStore.notes.splice(noteIndex, 1);
    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore));
}