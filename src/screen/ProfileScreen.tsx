import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Colors, GlobalStyles } from '../theme/appTheme'
import { HeaderNav } from '../components/HeaderNav'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';

export const ProfileScreen = ({ navigation }) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        getDataFavorites();
    }, []);

    const getDataFavorites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('favorites');
            const fav = jsonValue != null ? JSON.parse(jsonValue) : [];
            setFavorites(fav);
        } catch (e) {
            // error reading value
        }
    };

    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
            setFavorites([])
        } catch (e) {
            // clear error
        }
        console.log('Done.')
    }

    const renderItem = (item: any) => {
        return (
            <View style={styles.rowItem}>
                <View style={{ flex: 2, padding: 5 }}>
                    {<Image source={{ uri: item.image[1]["#text"] }} width={80} height={80} style={{ borderRadius: 5 }} />}
                </View>
                <View style={{ flex: 5, paddingTop: 10, justifyContent: "flex-start", marginHorizontal: 5 }}>
                    <Text style={styles.rowText}>({item.artist.name})</Text>
                    <Text style={{ fontSize: 16, color: Colors.secondary }}>{item.name}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("DetailScreen", { track: item })}>
                        <Icon name="play" size={35} color={Colors.secondary} />
                        <Text style={{ fontSize: 14, color: Colors.secondary }}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={GlobalStyles.conteinerScreen}>
            <HeaderNav title='Profile' back={true} onPress={() => navigation.goBack()} />
            <View style={{ flex: 1 }}>
                <Text style={{ ...GlobalStyles.labelText, textAlign: "center", paddingVertical: 10 }}>
                    Últimas canciones reproducidas
                </Text>
                {
                    favorites.length > 0 ?
                        <FlatList
                            data={favorites}
                            renderItem={({ item }) => renderItem(item)}
                            keyExtractor={(item) => item.name}
                            showsVerticalScrollIndicator={false}
                        />
                        :
                        <Text style={{ ...GlobalStyles.labelText, textAlign: "center" }}>
                            There are no favorites
                        </Text>
                }

                {/* <TouchableOpacity style={styles.delete} onPress={() => clearAll()}>
                    <Icon name="trash-outline" size={25} color={Colors.primary} />
                </TouchableOpacity> */}
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
    },
    delete: {
        position: "absolute",
        zIndex: 9999,
        bottom: 20,
        right: 20,
        height: 50,
        width: 50,
        backgroundColor: Colors.secondary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    }
})