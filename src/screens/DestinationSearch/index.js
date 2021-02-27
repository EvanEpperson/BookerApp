import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'

const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState('')



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
                renderItem={({item}) => (
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name={'location-pin'} size={30} />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </View>
                )}
            />

        </View>
    )
}

export default DestinationSearchScreen
