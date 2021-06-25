import React from "react"
import {
    Keyboard,
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform
} from "react-native"


import colors from "../styles/colors"
import fonts from "../styles/fonts"
import Button from '../components/Button'
import { useState } from "react"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"

const UserIdentification: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState("")

    const navigation = useNavigation()

    useEffect(() => {

        Keyboard.addListener("keyboardDidHide", () => {
            setIsFocused(false)
        })
        Keyboard.addListener("keyboardDidShow", () => {
            setIsFocused(true)
        })
    }, [])

    const handleInputChange = (value: string) => {
        setIsFilled(value.length > 0)
        setName(value)
    }
    const handleNavigationToConfirmation = () => {
        if (isFilled) {
            navigation.navigate("Confirmation")
        }
    }
    return (
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Text style={styles.emoji}>{isFilled ? "😁" : "😄"}</Text>
                            <Text style={styles.title}>
                                Como podemos {"\n"} chamar você?
                            </Text>
                            <TextInput
                                style={[styles.input, (isFocused || isFilled) && { borderColor: colors.green }]}
                                onChangeText={handleInputChange}
                                value={name}
                                placeholder="Digite um nome" />
                            <View style={styles.footer}>
                                <Button text="Confirmar" onPress={handleNavigationToConfirmation} />
                            </View>

                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


export default UserIdentification


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "space-around"
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 54,
        alignItems: "center"
    },
    emoji: {
        fontSize: 44
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
        fontSize: 24,
        textAlign: "center",
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }
})