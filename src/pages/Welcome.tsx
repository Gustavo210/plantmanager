import React from 'react'
import { Text, Dimensions, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

import watering from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';

const Welcome: React.FC = () => {

    const navigation = useNavigation()

    const handleNavigateToUserIdentification = () => {
        navigation.navigate("UserIdentification")
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {"\n"} suas plantas de forma {"\n"} fácil
            </Text>
            <Image resizeMode="contain" source={watering} style={styles.image} />
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>
            <TouchableOpacity onPress={handleNavigateToUserIdentification} style={styles.button} activeOpacity={0.7}>
                <Feather name="chevron-right" size={20} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 20,
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 38,
        lineHeight: 34
    },
    subtitle: {
        textAlign: "center",
        fontFamily: fonts.text,
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 30,
        height: 56,
        width: 56
    },
    image: {
        height: Dimensions.get("window").width * 0.7
    }
})