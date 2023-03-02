import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalProvider } from './src/provider/GlobalProvider';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <Routes/>
        <StatusBar style="auto" />
      </GlobalProvider>
    </NavigationContainer>
  );
}

