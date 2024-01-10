import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, slides, slides2, slides3 } from "./OnScreenComponents";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";
import HomeScreen from "./HomeScreen";
import { LinearGradient } from "expo-linear-gradient";


const { width, height } = Dimensions.get("window");

export default function SecondIntroScreen({navigation}) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const ref = React.useRef(null);

  const updateCurrentSlideIndex = (e) => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / width);
    setCurrentSlide(currentIndex);
  };

  const goTOLastSlide = () => {
    lastSlideIndex = slides2.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlide(lastSlideIndex);



    
  };

  const goToNextSlide = () => {
    nextSlide = currentSlide + 1;
    const offset = nextSlide * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlide(nextSlide);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{ width, height: "60%", marginTop: 20 }}
        />
        <View
          style={{
            // justifyContent: "center",
            alignItems: "center",
            // padding: 10 * 2,
            width: width * 0.9,
            // marginHorizontal: 10,
            // paddingHorizontal: 10,
            // backgroundColor: "red"
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.subtitle]}>{item.subtitle}</Text>
          <Text style={styles.subtitle}>{item.subtitle2}</Text>
        </View>
      </View>
    );
  };

  const Header = () => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          // height: height * 0.25,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlide == index && {
                  backgroundColor: "white",
                  width: 30,
                  height: 3.5,
                  backgroundColor: "white",
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: "white",
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          style={{ backgroundColor: "transparent" }}
          onPress={goTOLastSlide}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        style={{
          alignItems: "center",
          height: height * 0.25,
          paddingHorizontal: 10,
        }}
      >
      
      </View>
    );
  };

  const FooterBtn = () => {
    return (
      <View style={{ alignItems: "center", height: 50, marginBottom: 50 }}>

        {currentSlide == slides2.length - 1 ? (
          <TouchableOpacity
            style={[styles.btn2, { width: "85%" }]}
            onPress={() => navigation.replace('HomeScreen') }
          >
            <Text style={{ color: "white", fontSize: 15 }}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          //  Next Button
          <TouchableOpacity
            style={[styles.btn2, { width: "85%" }]}
            onPress={goToNextSlide}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // colors={["#7df3ff", "#05e6fc", "#00c1d4"]}
        colors={["#3498db", "#000428", ]}
      >

        <Header />
        <FlatList
          ref={ref}
          data={slides2}
          // contentContainerStyle={{ paddingHorizontal: 20, }}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          pagingEnabled
          style={{ overflow: "visible" }}
        />
        {/* <Footer /> */}
        <FooterBtn />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.secondary,
    // alignItems: "center",
    // justifyContent: "center",
    // fontFamily: "Inter_900Black",
    // fontSize: 100,
  },
  title: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 15,
    // maxWidth: "70%",
    // width: width * 0.8,
    fontSize: 17,
    lineHeight: 25,
    // marginHorizontal: 10,
    justifyContent: "center",
    // alignItems: "center",
    // alignSelf: "center",
    // alignContent: "center"
  },
  indicator: {
    height: 5,
    width: 10,
    borderRaidus: "50%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginHorizontal: 3,
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
  btn2: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1e90ff",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
  skipbtn: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
});
