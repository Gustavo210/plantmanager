import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import React from 'react';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold })
  if (!fontsLoaded) {
    return (
      <>
        <AppLoading />
        <StatusBar style="dark" />
      </>
    )
  } else {

    return (
      <>
        <Routes />
        <StatusBar style="dark" />
      </>
    );
  }
}

