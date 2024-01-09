import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, slides } from "./OnScreenComponents";
import { FlatList } from "react-native";

const { width, height } = Dimensions.get("window");

const renderItem = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ width, height: "75%", resizeMode: "contain" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

// function indicators () {
//   return (

//   )
// }

export default function IntroScreen({ navigation }) {
  const [currentSlide, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const updateCurrentScrollIndex = (e) => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlide + 1;
    const offset = nextSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(nextSlideIndex);
  };

  const skipTOLastSlide = () => {
    const lastSlideindex = slides.length - 1;
    const offset = lastSlideindex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideindex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          {/* <View style = {styles.indicator}/> */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlide == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                  borderRadius: 5,
                },
              ]}
            />
          ))}
        </View>

        <View style={{ marginBottom: 20 }}>
          {currentSlide == slides.length - 1 ? (
            <View style={{height: 50,}}>
              <TouchableOpacity style={styles.btn}>
                <Text>Get Started</Text>
              </TouchableOpacity>
            </View>
          ) : (
            /* lower buttons */
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "transparent" }]}
                onPress={skipTOLastSlide}
              >
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
              <View style={{ width: 20 }}></View>
              <TouchableOpacity style={styles.btn} onPress={goToNextSlide}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />

      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentScrollIndex}
        data={slides}
        horizontal
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        KeyExtractor={(item) => `${item.id}`}
        pagingEnabled
      />

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    // alignItems: "center",
    // justifyContent: "center",
    // fontFamily: "Inter_900Black",
    // fontSize: 100,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 20,
    maxWidth: "70%",
    fontSize: 13,
  },
  indicator: {
    height: 2.5,
    width: 10,
    marginHorizontal: 5,
    backgroundColor: "grey",
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
});
