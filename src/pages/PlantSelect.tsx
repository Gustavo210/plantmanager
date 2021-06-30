import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator, PixelRatio } from 'react-native'

import Header from '../components/Header'
import EnvironmentButton from '../components/EnvironmentButton'
import PlantCardPrimary from '../components/PlantCardPrimary'
import Load from '../components/Load'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { useEffect } from 'react'
import api from '../services/api'
import { useState } from 'react'


interface PropsEnvironment { key: string, title: string }
interface PropsPlants {
    id: string
    name: string
    about: string
    water_tips: string
    photo: string
    environments: string[],
    frequency: {
        times: string
        repeat_every: string
    }
}
export default function PlantSelect() {

    const [listEnvironments, setListEnvironments] = useState<PropsEnvironment[]>([])
    const [listPlants, setListPlants] = useState<PropsPlants[]>([])
    const [filteredPlants, setFilteredPlants] = useState<PropsPlants[]>([])
    const [environmentSelected, setEnvironmentSelected] = useState("all")
    const [loading, setLoading] = useState(false)

    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)
    const [loadedAll, setLoadedAll] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchEnvironment()
        fetchPlants()

    }, [])
    async function fetchEnvironment() {
        const { data } = await api.get<PropsEnvironment[]>(`plants_environments?_sort=title&_order=asc`)
        setListEnvironments([{ key: "all", title: "Todos" }, ...data])
    }
    async function fetchPlants() {
        const { data } = await api.get<PropsPlants[]>(`plants?_sort=name&_order=asc&_page=${ page }&_limit=8`)

        if (!data) {
            return setLoading(false)
        }
        if (page > 1) {
            setListPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        } else {
            setListPlants(data)
            setFilteredPlants(data)

        }
        setLoading(false)
        setLoadingMore(false)
    }

    const handleFetchMore = (distance: number) => {
        if (distance < 1) {
            return
        }
        setLoadingMore(true)
        setPage(oldValue => oldValue + 1)

        fetchPlants()
    }

    const handleEnvironmentKey = (key: string) => {
        setEnvironmentSelected(key)
        if (key === "all") {
            return setFilteredPlants(listPlants)
        }
        const filtered = listPlants.filter(plant => plant.environments.includes(key))

        setFilteredPlants(filtered)
    }

    if (loading) {
        return <Load />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
            </View>
            <FlatList
                data={listEnvironments}
                horizontal
                contentContainerStyle={styles.environmentList}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <EnvironmentButton {...item} onPress={() => handleEnvironmentKey(item.key)} isActive={environmentSelected === item.key} />}
            />
            <FlatList
                data={filteredPlants}
                showsVerticalScrollIndicator={true}
                numColumns={2}
                onEndReachedThreshold={0.2}
                onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                contentContainerStyle={styles.plants}
                renderItem={({ item }) => <PlantCardPrimary data={item} />}
                ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.green} /> : <></>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        lineHeight: 20,
        marginTop: 15,
        fontFamily: fonts.heading
    },
    subtitle: {
        fontSize: 17,
        color: colors.heading,
        lineHeight: 20,
        fontFamily: fonts.text
    },
    header: {
        paddingHorizontal: 30
    },
    environmentList: {
        height: 40,
        justifyContent: "center",
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },
    plants: {
        paddingHorizontal: 20
    }
})