import React, { useState } from "react";
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth()
  .signInWithEmailAndPassword('Email', 'Password')
  .then(() => {
    console.log('User signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/user-not-found') {
      console.log('That email address does not have an associated user!');
    }

    if (error.code === 'auth/wrong-password') {
      console.log('The password is incorrect!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupQ}>Don't have an account?</Text>
      <TouchableOpacity onPress={()=> Navigation.navigate("Signup")}>
          <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    width: "80%",
    height: 48,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 4,
    padding: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupQ: {
    marginTop: 10,
  },
  signupText: {
    color: "#007bff",
  }
});
