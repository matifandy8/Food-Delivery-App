import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Restaurants() {

 
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Restaurants </Text>
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
