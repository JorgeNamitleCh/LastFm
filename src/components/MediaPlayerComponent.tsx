import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { ProgressBar, Text } from 'react-native-paper';


export const MediaPlayerComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: "space-around" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 2, }}>
                    <Text style={{ color: Colors.white }}>
                        3:30
                    </Text>
                </View>
                <View style={{ flex: 7 }}>
                    <ProgressBar progress={0.8} color={Colors.secondary} />
                </View>
                <View style={{ flex: 2, alignItems: "flex-end" }}>
                    <Text style={{ color: Colors.white }}>
                        00:10
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 2, alignItems: "center" }}>
                    <TouchableOpacity>
                        <Icon name="play-back" size={35} color={Colors.gray} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, alignItems: "center" }}>
                    <TouchableOpacity
                        activeOpacity={.8}
                        style={styles.playBtn}>
                        <Icon name="play" size={35} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, alignItems: "center" }}>
                    <TouchableOpacity>
                        <Icon name="play-forward" size={35} color={Colors.gray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ 
                flexDirection: "row", 
            }}>
                <View style={{ ...styles.btnIndicator,  }}>
                    <Icon name="arrow-down-outline" size={20} color={Colors.secondary} />
                    <Text style={{ color: Colors.white }}>
                        145
                    </Text>
                    <Icon name="arrow-up-outline" size={20} color={Colors.secondary} />
                </View>
                <View style={{ ...styles.btnIndicator, justifyContent:"center" }}>
                    <Icon name="repeat-outline" size={20} color={Colors.secondary} />
                    <Text style={{ color: Colors.white }}>
                        18
                    </Text>
                </View>
                <View style={{ ...styles.btnIndicator, justifyContent:"center"  }}>
                    <Icon name="play-outline" size={20} color={Colors.secondary} />
                    <Text style={{ color: Colors.white }}>456</Text>
                </View>
                <View style={{ ...styles.btnIndicator, justifyContent: "flex-end", flex: 1 }}>
                    <Icon name="add" size={20} color={Colors.secondary} />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    playBtn: {
        backgroundColor: Colors.gray,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    btnIndicator: {
        flex: 2,
        flexDirection: "row",
        
    }
})