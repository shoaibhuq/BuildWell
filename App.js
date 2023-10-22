import React, { StyleSheet } from "react-native";
import { useState } from "react";

import HomeScreen from "./app/screens/Home";
import ProfileScreen from "./app/screens/Profile";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator
          labeled={false}
          barStyle={{ backgroundColor: "black" }}
          activeColor="white"
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen} //Home Screen
            options={{
              tabBarLabel: "Home",
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={isLoggedIn ? Login : ProfileScreen} //Home Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={24}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
