import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Navigation } from './src/navigation/Navigation';


export const App = () => {
    return (
        <Navigation />
    );
}


const AppState = ({ children }: any) => {
    return (
        <></>
    )
}

export default App
