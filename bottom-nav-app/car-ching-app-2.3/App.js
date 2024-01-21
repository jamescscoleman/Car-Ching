import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { registerRootComponent } from 'expo';

import Navigation from "./Navigation";

export default function App() {
  return <Navigation/>;
}
