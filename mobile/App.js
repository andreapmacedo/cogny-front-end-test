import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

