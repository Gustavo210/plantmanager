import { View, StyleSheet } from "react-native"
import React from "react"
import LottieView from 'lottie-react-native'

import loadAnimation from '../assets/load.json'



const Load: React.FC = () => {
    return (
        <View style={styles.container}>
            <LottieView source={loadAnimation} autoPlay loop style={styles.animation} />
        </View>
    )
}

export default Load


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    animation: {
        backgroundColor: "transparent",
        height: 200,
        width: 200
    }
})