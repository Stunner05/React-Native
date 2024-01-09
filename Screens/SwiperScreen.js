import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native";

// const wide = Dimensions.get("window").width;
// const h = Dimensions.get("window").height;

const SwiperScreen = () => {
  const wide = Dimensions.get("window").width;
  const h = Dimensions.get("window").height;

  function introduction() {
    return (
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            backgroundColor: "#3e01c4",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: h * 0.5,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 10 * 2,
            }}
          >
            <Text style={{ lineHeight: 36, fontSize: 22, color: "white" }}>
              Safe and Secure
            </Text>
            <Text style={{ lineHeight: 20, fontSize: 22, color: "white" }}>
              Cryptocurrency wallet
            </Text>
            <Text style={{ color: "white" }}>
              We are commited to helping you secure your
            </Text>
            <Text style={{ color: "white" }}>Cryptocurrency</Text>
          </View>
        </View>
      </View>
    );
  }

  function discoverCurrency() {
    return (
      <View
        style={{
          backgroundColor: "blue",
          borderRadius: 15,
          width: wide * 0.9,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>
          Discover New currency
        </Text>
      </View>
    );
  }

  function swiperScreen() {
    return (
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: "transparent",
          flexDirection: "row",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          flex: 1,
          paddingHorizontal: 1,
          paddingVertical: 20,
          justifyContent: "center",
          alignItems: "flex-end",
          // height: 100
          // width: 200
          // marginBottom: 30
        }}
        loop={true}
        showsButtons={true}
        paginationStyle={{
          // marginRight: wide * 0.7,
          marginBottom: h * 0.07,
          height: 60,
        }}
        activeDot={
          <View
            style={{
              backgroundColor: "white",
              width: 18,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDotColor="blue"
        nextButton={
          <View
            style={{
              height: 50,
              backgroundColor: "#fbba00",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              width: wide * 0.45,
              marginHorizontal: 10,
            }}
          >
            <Text>Get Started</Text>
            {/* <AntDesign name="arrowright" size={24} color="white" /> */}
          </View>
          // <View>
          //   <TouchableOpacity
          //     style={{
          //       flex: 1,
          //       height: 50,
          //       marginRight: 10,
          //       backgroundColor: "Red",
          //       alignItems: "center",
          //       justifyContent: "center",
          //       borderRadius: 10,
          //     }}
          //     // onPress={() => navigation.navigate("Home")}
          //   >
          //     <Text style={{ fontSize: 30, color: "white" }}>Call</Text>
          //   </TouchableOpacity>
          // </View>
        }
        prevButton={
          <View style={styles.prevbtn}>
            <Text>Skip</Text>
            {/* <AntDesign name="arrowleft" size={24} color="white" /> */}
          </View>
        }
      >
        {/* slide1 */}

        <SafeAreaView style={styles.slide1}>
          <View style={styles.icon}>
            <View
              style={{
                width: wide * 0.85,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ marginLeft: 50 }}>
                <FontAwesome5 name="react" size={40} color="orange" />
              </View>
            </View>
            <TouchableOpacity style={{ justifyContent: "center" }}>
              <View style={{ marginRight: 90 }}>
                <Text style={{}}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Image
            source={require("./assets/images/123.jpg")}
            style={{
              height: h * 0.5,
              width: wide * 0.9,
              alignSelf: "center",
              borderTopRightRadius: 80,
              borderBottomLeftRadius: 80,
            }}
            // resizeMode="contain"
          />

          {introduction()}
        </SafeAreaView>

        {/* Slide 2 */}
        <SafeAreaView style={styles.slide1}>
          <View style={styles.icon}>
            <View
              style={{
                width: wide * 0.85,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ marginLeft: 50 }}>
                <FontAwesome5 name="react" size={40} color="orange" />
              </View>
            </View>
            <TouchableOpacity style={{ justifyContent: "center" }}>
              <View style={{ marginRight: 90 }}>
                <Text style={{}}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Image
            source={require("./assets/images/333.png")}
            style={{
              height: h * 0.5,
              width: wide * 0.9,
              alignSelf: "center",
              borderTopRightRadius: 80,
              borderBottomLeftRadius: 80,
            }}
            // resizeMode="contain"
          />

          {introduction()}
        </SafeAreaView>

        {/* Slide 3 */}
        <SafeAreaView style={styles.slide3}>
          <Image
            source={require("./assets/images/img1.jpg")}
            style={{
              height: h * 0.6,
              width: wide * 0.9,
              alignSelf: "center",
              borderTopRightRadius: 80,
              borderBottomLeftRadius: 80,
            }}
            resizeMode="contain"
          />
          <Text style={styles.text}>
            Hello Swiper, when i was lorem five in the best space possible, but
            still not the most affordable
          </Text>
          {discoverCurrency()}
        </SafeAreaView>
      </Swiper>
    );
  }

  return (
    <View style={styles.container}>{swiperScreen()}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // fontFamily: "Inter_900Black",
    // fontSize: 100,
  },
  prevbtn: {
    height: 50,
    width: wide * 0.45,
    backgroundColor: "#8A56AC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginHorizontal: 10,
  },
  slide1: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#8395f9",
    // paddingTop: 80,
    // backgroundColor: "#282828",
    // marginVertical: 30,
  },
  slide3: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    // paddingHorizontal: 30
  },

  img0: {
    height: 50,
    borderTopRightRadius: 80,
  },
  text: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 20,
    padding: 20,
  },
  title: {},
});

export default SwiperScreen;
