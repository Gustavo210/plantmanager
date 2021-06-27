import React from "react"
import { Keyboard, View, Text, SafeAreaView, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native"


import colors from "../styles/colors"
import fonts from "../styles/fonts"
import Button from '../components/Button'
import { useState } from "react"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"

export default function Confirmation() {
    const navigation = useNavigation()

    const handleGoToPlantSelect = () => {
        navigation.navigate("PlantSelect")
    }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😁
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subTitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>
                <View style={styles.footer}>
                    <Button text="Começar" onPress={handleGoToPlantSelect} />
                </View>
            </View>
        </SafeAreaView>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        padding: 30
    },
    emoji: {
        fontSize: 78
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: "center"
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subTitle: {
        fontFamily: fonts.text,
        textAlign: "center",
        fontSize: 17,
        paddingHorizontal: 10,
        color: colors.heading
    },
    footer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 50
    }
})