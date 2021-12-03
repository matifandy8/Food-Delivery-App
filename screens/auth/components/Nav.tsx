import React from 'react';
import { StyleSheet, Text, View,Image,StatusBar } from 'react-native';

export default function Nav() {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
    height: 345,
  },
    logo: {
        width: 200,
        height: 200,
        marginTop: 100,
        marginLeft: 100,
    }
});
