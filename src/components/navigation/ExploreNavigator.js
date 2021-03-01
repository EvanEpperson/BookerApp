import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/Home";
import SearcResultsScreen from "../../screens/SearchResults";
import { NavigationContainer } from "@react-navigation/native";
import SearchResultsTabNavigator from "../../screens/SearchResults";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={"SearchResults"}
        component={SearchResultsTabNavigator}
        options={{
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
