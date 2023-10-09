import { Platform, StyleSheet } from "react-native";

export const Colors = {
    primary: '#13223a',
    primaryLightColor: '#13222f',
    secondary: '#6e8198',
    gray: '#ebebeb',
    dark: '#000000',
    white: '#FFFFFF' 
}

export const GlobalStyles = StyleSheet.create({
    conteinerScreen: {
        paddingTop: Platform.OS == "android" ? 10 : 60,
        padding: 5,
        flex: 1,
        backgroundColor: Colors.primary
    },
    labelText: {
        color: "#ffffff",
        fontSize: 18,
    }
});