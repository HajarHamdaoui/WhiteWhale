import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const OptionCard = ({ onPress, textAbovePhoto, photoSource }) => {
  const [loaded] = useFonts({
    BubblegumSans: require("../../../assets/fonts/BubblegumSans-Regular.ttf"),
    Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.cardWrapper}>
      <LinearGradient
        colors={["#34CAFF", "#1F7999"]}
        style={styles.linearGradientWrapper}
      >
        <TouchableOpacity onPress={onPress} style={styles.card}>
          <Text style={styles.textAbove}>{textAbovePhoto}</Text>
          <View style={styles.photoContainer}>
            <View style={styles.circularPhoto}>
              <Image source={photoSource} style={styles.photo} />
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "#0000",
  },
  linearGradientWrapper: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0,
    shadowRadius: 4,

    elevation: 14,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 180,
  },
  textAbove: {
    position: "absolute",
    fontFamily: "BubblegumSans",
    color: "#FFF",

    bottom: 5,

    zIndex: 1,
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  circularPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default OptionCard;
