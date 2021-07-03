import React from "react";
import { Animated, StyleSheet, Text, View } from 'react-native'
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from '@expo/vector-icons'

import { SvgFromUri } from 'react-native-svg';

import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface PropsPlantCardSecondary extends RectButtonProps {
    data: {
        name: string
        photo: string
        hour?: string
    }
    handleRemove: () => void
}
const PlantCardSecondary: React.FC<PropsPlantCardSecondary> = ({ data, handleRemove, ...rest }) => {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleRemove}
                        >
                            <Feather name="trash" size={32} color={colors.white} />
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >

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
        </Swipeable>
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
    },
    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors.red,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        right: 20,
        paddingLeft: 15
    }
})