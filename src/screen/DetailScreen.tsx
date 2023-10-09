import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, GlobalStyles } from '../theme/appTheme';
import { MediaPlayerComponent } from '../components/MediaPlayerComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderNav } from '../components/HeaderNav';


export const DetailScreen = ({ route, navigation }) => {

    const { track } = route.params;

    return (
        <View style={GlobalStyles.conteinerScreen}>
            <HeaderNav title={track.name} onPress={ () => navigation.goBack() } back={true}/>
            <View style={{ flex: 6 }}>
                <Image source={{ uri: track.image[3]["#text"] }} style={styles.imgHeader} />
            </View>
            <View style={{ flex: 1, padding: 20 }}>
                <Text style={GlobalStyles.labelText}>{track.artist.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                    <Text style={{ fontSize: 22, color: Colors.secondary, paddingEnd: 10 }}>{track.name}</Text>
                    <Icon name="musical-notes" size={30} color={Colors.secondary}/>
                </View>
            </View>
       
            <View style={{ flex: 3, paddingHorizontal: 20, paddingBottom: 20 }}>
                <MediaPlayerComponent />
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    imgHeader: {
        //elevation: 10,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        width: "100%", height: "100%",
        zIndex: 0,
    },
})
