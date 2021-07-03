import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"


import colors from "../styles/colors"
import fonts from "../styles/fonts"
import Button from '../components/Button'
import { useNavigation, useRoute } from "@react-navigation/native"


type Emojis = "😁" | "🤗"
export interface PropParams {
    title: string
    subtitle: string
    buttonTitle: string
    icon: Emojis
    nextScreen: string
}


export default function Confirmation() {
    const navigation = useNavigation()
    const route = useRoute()
    const props = route.params as PropParams

    const handleGoToPlantSelect = () => {
        navigation.navigate(props.nextScreen)
    }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {props.icon}
                </Text>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.subTitle}>
                    {props.subtitle}
                </Text>
                <View style={styles.footer}>
                    <Button text={props.buttonTitle} onPress={handleGoToPlantSelect} />
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