import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DestinationSearchScreen from '../../screens/DestinationSearch'
import GuestsScreen from '../../screens/Guests'
import homeTabNavigator from './HomeTabNavigator'
import SearchResultsScreen from '../../screens/SearchResults'

const Stack = createStackNavigator()



const Router = (props) => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Home"}
            component={homeTabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={"Destination Search"}
            component={DestinationSearchScreen}
            options={{
              title: "Search Your Destination",
            }}
          />
          <Stack.Screen
            name={"Guests"}
            component={GuestsScreen}
            options={{
              title: "How many People",
            }}
          />
          <Stack.Screen
            name={"SearchResults"}
            component={SearchResultsScreen}
            options={{
              title: "How many People",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Router;
