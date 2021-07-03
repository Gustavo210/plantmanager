import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import colors from '../styles/colors'
import PlantSelect from '../pages/PlantSelect'
import { MyPlants } from '../pages/MyPlants'
import { MaterialIcons } from '@expo/vector-icons'
import { Platform } from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator()

const AuthRoutes: React.FC = () => {

    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: "beside-icon",
                style: {
                    paddingHorizontal: Platform.OS === "ios" ? 20 : 0,
                    height: 88
                }
            }}
        >
            <Screen name="Nova Planta" component={PlantSelect}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialIcons name="add-circle-outline" size={size} color={color} />
                }}
            />
            <Screen name="Minhas Plantas" component={MyPlants}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialIcons name="format-list-bulleted" size={size} color={color} />
                }}
            />
        </Navigator>
    )
}

export default AuthRoutes