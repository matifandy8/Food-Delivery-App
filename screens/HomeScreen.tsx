import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../firebase'

export default function HomeScreen() {

  const handleSignOut = () => {
    auth.signOut()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Home Screen </Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});
