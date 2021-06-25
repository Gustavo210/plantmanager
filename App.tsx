import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import React from 'react';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'

import Confirmation from './src/pages/Confirmation';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {

    return (<>
      <Confirmation />
      <StatusBar style="dark" />
    </>
    );
  }
}

