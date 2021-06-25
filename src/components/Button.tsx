import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from "react-native"
import React from "react"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface PropsButton extends TouchableOpacityProps {
    text: string
}

const Button: React.FC<PropsButton> = ({ text, ...rest }) => {
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
})