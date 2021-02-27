import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Entype from 'react-native-vector-icons/Entypo'
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home'
import feed from './assets/data/feed.js'
import SearchResultsScreen from './src/screens/SearchResults'
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import 'react-native-gesture-handler'
import Router from './src/components/navigation/Router';


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}
