import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Image source={require('../../images/NPC1.webp')} style={styles.imageStyle} />

      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>John Doe</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>johndoe@example.com</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>555-555-5555</Text>
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
  },
  imageStyle: {
    marginBottom: 80,
  },
  profileInfo: {
    flexDirection: "row",
<<<<<<< HEAD
    marginBottom: 40,
    marginTop: 20,
=======
    marginBottom: 10,
    alignContent: "center",
>>>>>>> 3f54651b73067ee83f98a90651ea4b7a42561f30
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
    marginLeft: 30,
    fontSize: 16,
  },
  value: {
    flex: 1,
    fontSize: 16,
  },
});


export default Profile;
