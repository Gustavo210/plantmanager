import React, { useState } from "react";

import { Text, View, Image, StyleSheet, FlatList } from 'react-native'

import Header from "../components/Header";
import colors from "../styles/colors";
import Waterdrop from '../assets/waterdrop.png'
import { loadPlant, PlantProps } from "../libs/storage";
import { useEffect } from "react";
import { formatDistance } from "date-fns/esm";
import PtBr from "date-fns/locale/pt-BR";
import fonts from "../styles/fonts";
import PlantCardSecondary from "../components/PlantCardSecondary";

export function MyPlants() {

    const [myPlants, setMyPlants] = useState<PlantProps[]>([])
    const [loading, setLoading] = useState(true)
    const [nextWatered, setNextWatered] = useState("")


    useEffect(() => {
        async function loadStorageData() {
            const plantsStorage = await loadPlant()

            const nextTime = formatDistance(
                new Date(plantsStorage[0].dateTimeNotification).getTime(),
                new Date(),
                {
                    locale: PtBr
                }
            )

            setNextWatered(`Não esqueça de regar a ${ plantsStorage[0].name } à ${ nextTime }`)
            setMyPlants(plantsStorage)
            setLoading(false)
        }
        loadStorageData()
    }, [])

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image source={Waterdrop} style={styles.spotlightImage} />
                <Text style={styles.spotlightText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
            </View>
            <View style={styles.plants}>
                <Text style={styles.plantTitle}>
                    Próximas regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={item => item.id.toString()}
                    renderItem={props => <PlantCardSecondary data={props.item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    spotlightImage: {
        width: 60,
        height: 60
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
        textAlign: "justify"
    },
    plants: {
        flex: 1,
        width: "100%"
    },
    plantTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    }
})