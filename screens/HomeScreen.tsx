import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from '../firebase'
import Restaurants from "./components/Restaurants";


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
      >
        <Text>Sign out</Text>
      </TouchableOpacity>
    <Restaurants/>
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
