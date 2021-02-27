
import React from 'react'
import { View, Text, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = (props) => {
  const navigation = useNavigation()



    return (
      <View>
        {/* search bar  */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.searchButton}
          onPress={() => navigation.navigate("Destination Search")}
        >
          <Fontisto name="search" size={25} color={"#f15454"} />
          <Text style={styles.searchButtonText}> Where are you going? </Text>
        </TouchableOpacity>

        <ImageBackground
          source={require("../../../assets/images/wallpaper.jpg")}
          style={styles.image}
        >
          {/* title */}
          <Text style={styles.title}>Go Near </Text>

          {/* button */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => console.warn("explore button clicked")}
          >
            <Text style={styles.buttonText}>Explore Nearby Place</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
}

export default HomeScreen
