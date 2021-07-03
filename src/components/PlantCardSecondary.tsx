import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from 'react-native'
import { RectButtonProps, RectButton } from "react-native-gesture-handler";

import { SvgFromUri } from 'react-native-svg';

import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface PropsPlantCardSecondary extends RectButtonProps {
    data: {
        name: string
        photo: string
        hour?: string
    }

}
const PlantCardSecondary: React.FC<PropsPlantCardSecondary> = ({ data, ...rest }) => {
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.image}>

                <SvgFromUri uri={data.photo} height={50} width={50} />
            </View>
            <Text style={styles.title}>
                {data.name}
            </Text>
            <View style={styles.details}>
                <Text style={styles.timeLabel}>
                    Regar ás
                </Text>
                <Text style={styles.time}>
                    {data.hour}
                </Text>
            </View>
        </RectButton>
    )
}
export default PlantCardSecondary

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.shape,
        marginVertical: 5
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fonts.heading,
        fontSize: 17,
        color: colors.heading
    },
    details: {
        alignItems: "flex-end"
    },
    timeLabel: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.body_dark
    },
    image: {
        height: 50,
        width: 50
    }
})