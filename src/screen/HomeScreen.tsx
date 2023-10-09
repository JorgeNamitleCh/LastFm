import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { api, userClient } from '../api/api'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, GlobalStyles } from '../theme/appTheme';
import { HeaderNav } from '../components/HeaderNav';
import { UseGetTracks } from '../hooks/UseGetTracks';



export const HomeScreen = ({ navigation }) => {

    const { tracks, addFavorites } = UseGetTracks();

    const goDetail = (item:any) => {
        addFavorites(item)
        navigation.navigate("DetailScreen", { track: item })
    }

    const renderItem = (item: any) => {
        return (
            <TouchableOpacity style={styles.rowItem} onPress={() => goDetail(item) } activeOpacity={.8}>
                <View style={{ flex: 2, padding: 5 }}>
                    {<Image source={{ uri: item.image[1]["#text"] }} width={80} height={80} style={{ borderRadius: 5 }} />}
                </View>
                <View style={{ flex: 5, paddingTop: 10, justifyContent: "flex-start", marginHorizontal: 5 }}>
                    <Text style={styles.rowText}>({item.artist.name})</Text>
                    <Text style={{ fontSize: 16, color: Colors.secondary }}>{item.name}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => goDetail(item) } >
                        <Icon name="play" size={35} color={Colors.secondary} />
                        <Text style={{ fontSize: 14, color: Colors.secondary }}>Play</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={GlobalStyles.conteinerScreen}>
            <HeaderNav title={"Home"} back={false} profile={true} onPress={() => navigation.navigate("ProfileScreen")} />
            <View style={{ flex: 1 }}>
                {
                    tracks.length > 0 ?
                        <FlatList
                            data={tracks}
                            renderItem={ ({ item }) => renderItem(item) }
                            keyExtractor={ (item) => item.name }
                            showsVerticalScrollIndicator={false}
                        />
                        :
                        <View style={{ flex: 1 , justifyContent: "center" , alignItems: "center"}}>
                            <Text style={ GlobalStyles.labelText }>
                                Loading... 
                            </Text>
                        </View>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowItem: {
        flexDirection: "row",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.secondary,
        margin: 8
    },
    rowText: {
        color: Colors.white,
        fontSize: 18,
    }
})
