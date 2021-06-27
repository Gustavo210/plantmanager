import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from 'react-native'
import { RectButtonProps, RectButton } from "react-native-gesture-handler";

import { SvgFromUri } from 'react-native-svg';

import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface PropsPlantCardPrimary extends RectButtonProps {
    data: {
        name: string
        photo: string
    }

}
const PlantCardPrimary: React.FC<PropsPlantCardPrimary> = ({ data, ...rest }) => {
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.image}>

                <SvgFromUri uri={data.photo} height={70} width={70} />
            </View>
            <Text style={styles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}
export default PlantCardPrimary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: "45%",
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: "center",
        margin: 10
    },
    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    },
    image: {
        height: 70,
        width: 70
    }
})