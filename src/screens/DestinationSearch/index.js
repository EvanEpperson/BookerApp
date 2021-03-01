import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable, TouchableOpacity } from 'react-native'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from './SuggestionRow'

const DestinationSearchScreen = (props) => {
  const navigation= useNavigation()

  return (
      <View style={styles.container}>
        {/* need to put height because it wont display anything else if you dont have a height  */}
          <GooglePlacesAutocomplete
            placeholder="Where are you going?"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              navigation.navigate('Guests')
            }}
            fetchDetails
            styles={{
              textInput: styles.textInput,
            }}
            query={{
              key: "AIzaSyDTU9LribVlFE48ayEX3l6Kn1VMuNdx1YU",
              language: "en",
              types: '(cities)'
            }}
            suppressDefaultStyles
            renderRow={(item) => <SuggestionRow item={item} />}
          />
      </View>
    );
}

export default DestinationSearchScreen
