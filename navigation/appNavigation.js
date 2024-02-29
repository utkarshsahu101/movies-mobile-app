import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import Person from "../screens/PersonScreen";
import PersonScreen from "../screens/PersonScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    // <View>
    //     <Text>gfxcghcjg</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Movie"
          options={{ headerShown: false }}
          component={MovieScreen}
        />
        <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
