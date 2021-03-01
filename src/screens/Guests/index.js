import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import {useNavigation} from '@react-navigation/native'

const GuestsScreen = () => {



    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);

    const navigation = useNavigation()

    return (
      <View style={{justifyContent: 'space-between', height: '100%'}}>
        {/* Row 1 adults */}
        <View>
          <View style={styles.row}>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Adults
              </Text>
              <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => setAdults(Math.max(0, adults - 1))}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
              </TouchableOpacity>

              <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

              <TouchableOpacity
                onPress={() => setAdults(adults + 1)}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
              </TouchableOpacity>
            </View>

            {/* titles */}

            {/* buttons with value  */}
          </View>
          <View style={styles.row}>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Children
              </Text>
              <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
              </TouchableOpacity>

              <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>

              <TouchableOpacity
                onPress={() => setChildren(children + 1)}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
              </TouchableOpacity>
            </View>

            {/* titles */}

            {/* buttons with value  */}
          </View>
          <View style={styles.row}>
          <View>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Infants
            </Text>
            <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => setInfant(Math.max(0, infant - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infant}</Text>

            <TouchableOpacity
              onPress={() => setInfant(infant + 1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </TouchableOpacity>
          </View>

          {/* titles */}

          {/* buttons with value  */}
        </View>
        {/* row 1 end  */}
        </View>
        
          <TouchableOpacity 
          onPress={() => navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults'
            }
          }) }
          style={{

            marginBottom: 20, 
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: "center",
            height: 50, 
            marginHorizontal: 20, 
            borderRadius: 10,}}  >
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Search</Text>
          </TouchableOpacity>
        
      </View>
    );
}

export default GuestsScreen
