import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable, TouchableOpacity } from 'react-native'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState('')

    const navigation= useNavigation()



    return (
      <View style={styles.container}>
        {/* input components */}
        <TextInput
          style={styles.textInput}
          placeholder="where are you going?"
          value={inputText}
          onChangeText={setInputText}
        />

        {/* list of destinations */}
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Guests")}
              style={styles.row}
            >
              <View style={styles.iconContainer}>
                <Entypo name={"location-pin"} size={30} />
              </View>
              <Text style={styles.locationText}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
}

export default DestinationSearchScreen
