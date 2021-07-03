import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors'
import Welcome from '../pages/Welcome'
import UserIdentification from '../pages/UserIdentification'
import Confirmation from '../pages/Confirmation'
import PlantSelect from '../pages/PlantSelect'
import PlantSave from '../pages/PlantSave'
import { MyPlants } from '../pages/MyPlants'

const { Navigator, Screen } = createStackNavigator()

const AppRoutes: React.FC = () => {

    return (
        <Navigator headerMode="none" screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}>
            <Screen name="Welcome" component={Welcome} />
            <Screen name="UserIdentification" component={UserIdentification} />
            <Screen name="Confirmation" component={Confirmation} />
            <Screen name="PlantSelect" component={PlantSelect} />
            <Screen name="PlantSave" component={PlantSave} />
            <Screen name="MyPlants" component={MyPlants} />
        </Navigator>
    )
}

export default AppRoutes