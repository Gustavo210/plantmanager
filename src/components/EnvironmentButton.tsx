import React from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PropsEnvironmentButton extends RectButtonProps {
    title: string
    isActive?: boolean
}


const EnvironmentButton: React.FC<PropsEnvironmentButton> = ({ title, isActive, ...rest }) => {

    return (
        <RectButton style={[styles.container, isActive && styles.isActiveContainer]} {...rest}>
            <Text style={[styles.text, isActive && styles.isActiveText]}>
                {title}
            </Text>
        </RectButton>
    )
}


export default EnvironmentButton


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 12,
        marginHorizontal: 2
    },
    isActiveContainer: {
        backgroundColor: colors.green_light,

    },
    isActiveText: {
        fontFamily: fonts.heading,
        color: colors.green_dark

    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    }
})