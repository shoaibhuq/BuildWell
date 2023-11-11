import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

const HomeScreen = () => {
  const handleCheckinPress = () => {
    //Navigate to the checkin screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BuildWell</Text>
      <Text style={styles.subtitle}>
        Start building wells and changing lives today.
      </Text>
      <Pressable
        title="Start Check in"
        onPress={handleCheckinPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start Check in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    // attatch to top of screen
    marginTop: 0,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 10,
    margin: 24,
    elevation: 3,
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default HomeScreen;
