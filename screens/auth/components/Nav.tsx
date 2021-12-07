import React from "react";
import { StyleSheet,  View, Image, StatusBar } from "react-native";

export default function Nav() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    height: 245,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginLeft: 100,
  },
});
