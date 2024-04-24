import React from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardWrapper from "./cardWrapper";
import FramedImage from "./framedImage";
import Header from "./header";
import { useFonts } from "expo-font";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header height={300}>
        <Text style={styles.headerText}>
          That’s nothing lovier than being home!
        </Text>
      </Header>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/homeImages/homeImage.jpeg")}
          style={styles.homeImage}
        />
        <View style={styles.iconBar}>
          <Ionicons name="heart-outline" size={24} color="white" />
          <Ionicons name="chatbox-outline" size={24} color="white" />
          <Ionicons name="share-social-outline" size={24} color="white" />
        </View>
      </View>
      <CardWrapper />
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
  },
  homeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageContainer: {
    position: "relative",
    width: width,
    height: height * 0.3,
    overflow: "hidden",
    zIndex: -1,
  },
  iconBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1F7999",
    opacity: 0.7,
    paddingVertical: 8,
  },
  headerText: {
    position: "absolute",

    top: 10,
    left: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
