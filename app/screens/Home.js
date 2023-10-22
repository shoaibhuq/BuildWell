import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BuildWell</Text>
      <Text style={styles.subtitle}>
        Start building wells and changing lives today.
      </Text>
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
});

export default HomeScreen;
