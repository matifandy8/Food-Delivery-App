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
});
