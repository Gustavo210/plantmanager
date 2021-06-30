import React, { useState, useEffect } from "react";
import { Image, PixelRatio } from "react-native";
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from "../styles/colors";
import fonts from "../styles/fonts";


const Header: React.FC = props => {

    const [userName, setUserName] = useState("")
    useEffect(() => {
        ; (async () => {
            const name = await AsyncStorage.getItem("@plantmanager:user")
            setUserName(name || "")
        })()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={{ uri: "https://avatars.githubusercontent.com/u/44369818?v=4" }} style={styles.image} />
        </View>
    )
}


export default Header


const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        marginTop: Dimensions.get("window").height * 0.05
    },
    image: {
        width: PixelRatio.getPixelSizeForLayoutSize(25),
        height: PixelRatio.getPixelSizeForLayoutSize(25),
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(12)
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.heading
    }
})