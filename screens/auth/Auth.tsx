import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Nav from "./components/Nav";
import TabNavigator from "./components/TabNavigator";


export default function Auth() {
  return (
    <View style={styles.container}>
      <Nav />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
