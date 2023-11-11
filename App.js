import React, { StyleSheet } from "react-native";
import { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./app/screens/Home";
import ProfileScreen from "./app/screens/Profile";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";

const Tab = createMaterialBottomTabNavigator();
const AuthStack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const AuthStackNavigator = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login">
          {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
        </AuthStack.Screen>
        <AuthStack.Screen name="Signup" component={Signup} />
      </AuthStack.Navigator>
    );
  };

  if (!isLoggedIn) {
    return (
      <NavigationContainer style={styles.container}>
        <AuthStackNavigator />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        labeled={false}
        barStyle={{ backgroundColor: "black" }}
        activeColor="white"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
