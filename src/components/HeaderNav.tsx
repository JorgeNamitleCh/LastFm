import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string,
    back: boolean,
    profile?: boolean,
    onPress?: () => void
}

export const HeaderNav = ({ title = "", onPress = () => { }, back = false, profile = false, }: Props) => {
    return (
        <View style={styles.nav}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                {
                    back &&
                    <TouchableOpacity style={styles.backBtn} onPress={onPress}>
                        <Icon name="chevron-back-outline" size={30} color={Colors.secondary} />
                    </TouchableOpacity>
                }

            </View>
            <View style={{ flex: 2, justifyContent: "center" }}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                {
                    profile &&
                    <TouchableOpacity style={styles.backBtn} onPress={onPress}>
                        <Icon name="person-outline" size={30} color={Colors.secondary} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        height: 60,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: "bold",
        textAlign: "center"
    },
    backBtn: {
        borderRadius: 30,
    }
})