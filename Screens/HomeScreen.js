import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native';


const HomeScreen = () => {
  return (
    // <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
    <LinearGradient
      // colors={["#7df3ff", "#05e6fc", "#00c1d4"]}
      colors={["#3498db", "#000428", "#2a5298"]}
      style={styles.container}
    >
      <Text>Get Started</Text>
    </LinearGradient>
    // </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2193b0",
    // alignItems: "center",
    // justifyContent: "center",
    // fontFamily: "Inter_900Black",
    // fontSize: 100,
  },
  
});
