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

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          {/* <HomeScreen /> */}
          {/* <Post post={post1} />
          <Post post={post2} />
          <Post post={post3} /> */}
          {/* <SearchResultsScreen /> */}
          {/* <DestinationSearchScreen /> */}
          <GuestsScreen />
      </SafeAreaView>
    </>
  );
}
