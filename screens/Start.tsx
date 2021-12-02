import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function Start() {
    const onPress = () => {
        console.log('Pressed');
    }


  return (
    <View style={styles.container}>
        <View style={styles.logobg}>
             <Image source={require('../assets/logo.png')} style={styles.logo}/>
        </View>
      <Text style={styles.title}>Fast, rescued food at your service.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Get Started!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FF4B3A',
    width: '100%',

  },
  logobg:{
      width: 100,
      height: 100,
      backgroundColor: '#ffffff',
      borderRadius: 50,
    },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    },
    title: {
     fontFamily: 'Metropolis-light',
     fontSize: 55,
     color: '#fff',
     fontWeight: '100',
     lineHeight: 60,
     fontStyle: 'normal',
     textAlign: 'center',
     letterSpacing: -0.3,
    },   
    button: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 30,
        marginTop: 20,
        width: 314,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Metropolis-Bold',
        fontSize: 17,
        fontWeight: '100',
        lineHeight: 20,
        fontStyle: 'normal',
        textAlign: 'center',
        letterSpacing: -0.3,
        color: '#ff460a',
    }
});
