import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import {
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import IntroScreen from "./Screens/IntroScreen";
import SecondIntroScreen from "./Screens/SecondIntroScreen";
import HomeScreen from "./Screens/HomeScreen";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import React from "react";



export default function App() {
  // const [appFirstLaunch, setAppfirstLaunched] = React.useState(null);

  // React.useEffect(
  //   async () => {
  //     const appData = await AsyncStorage.setItem("appFirstLaunch", "false");
  //     if (appData == null) {
  //       appFirstLaunch(true)
  //     } else {
  //       setAppfirstLaunched(false)
  //     }

  //   }, []
  // );


  const Stack = createNativeStackNavigator();

  // const wide = Dimensions.get("window").width;

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_400Regular,
  });

  //  if (!fontsLoaded) {
  //    return null;
  //  }

 
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Home" component={BottomTab} /> */}
          {/* <Stack.Screen name="IntroScreen" component={IntroScreen} /> */}
            <Stack.Screen
              name="SecondIntroScreen"
              component={SecondIntroScreen}
            />

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // fontFamily: "Inter_900Black",
    // fontSize: 100,
  },

  title: {},
});
