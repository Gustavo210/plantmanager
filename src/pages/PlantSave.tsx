import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, View, Text, StyleSheet, Platform, Alert, TouchableOpacity } from "react-native";
import { SvgFromUri } from 'react-native-svg'
import DateTimerPiker, { Event } from '@react-native-community/datetimepicker'


import Waterdrop from '../assets/waterdrop.png'
import Button from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { format, isBefore } from "date-fns";
import { loadPlant, PlantProps, savePlant } from "../libs/storage";
import { PropParams } from "./Confirmation";


export default function PlantSave() {

    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePiker, setShowDatePicker] = useState(Platform.OS === "ios")


    const routes = useRoute()
    const plant = routes.params as PlantProps
    const navigation = useNavigation()

    const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
        if (Platform.OS === "android") {
            setShowDatePicker(oldState => !oldState)
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date())
            return Alert.alert("Escolha uma hora no futuro! 🕕")
        }

        if (dateTime) {
            setSelectedDateTime(dateTime)
        }
    }
    const handleOpenDateTimePickerForAndroid = () => {
        setShowDatePicker(oldState => !oldState)
    }
    const handleConfirm = async () => {
        try {
            await savePlant({ ...plant, dateTimeNotification: selectedDateTime })
            const params: PropParams = {
                buttonTitle: "Começar",
                icon: "🤗",
                nextScreen: "MyPlants",
                subtitle: "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.",
                title: "Tudo certo"
            }

            navigation.navigate("Confirmation", params)
        } catch (error) {
            return Alert.alert("Nao foi possível salvar, 😥")
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>
                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image source={Waterdrop} style={styles.tipImage} />
                    <Text style={styles.tipText}>
                        {plant.water_tips}
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado
                </Text>

                {showDatePiker && (
                    <DateTimerPiker
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime}
                    />
                )}

                {Platform.OS === "android" && (
                    <TouchableOpacity onPress={handleOpenDateTimePickerForAndroid} style={styles.dateTimePickerButton}>

                        <Text style={styles.dataTimePickerText}>
                            {`Mudar ${ format(selectedDateTime, "HH:mm") }`}
                        </Text>
                    </TouchableOpacity>
                )}

                <Button text="Cadastrar planta" onPress={handleConfirm} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.shape
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15
    },
    plantAbout: {
        textAlign: "center",
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    controller: {
        backgroundColor: colors.white,
        padding: 20
    },
    tipContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: "relative",
        bottom: 60
    },
    tipImage: {
        width: 56,
        height: 56
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: "justify"
    },
    alertLabel: {
        textAlign: "center",
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },
    dateTimePickerButton: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 40
    },
    dataTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    }
})