import {StatusBar} from 'expo-status-bar';
import {HomeScreen} from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {EditNoteScreen} from "./screens/EditNoteScreen";
import {RootStackParamList} from "./types";
import React from "react";
import {NewNoteButton} from "./components/NewNoteButton";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    const renderNewNoteButton = () => {
        return <NewNoteButton />;
    }

    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={() => {
                        return {
                            headerTitle: 'All Notes',
                            headerRight: () => renderNewNoteButton()
                        }
                    }}
                />
                <Stack.Screen name="EditNote" component={EditNoteScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
