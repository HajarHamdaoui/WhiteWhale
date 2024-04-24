import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CustomShapeImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.customShape}>
        <Image
          source={require("../../../assets/homeImages/homeImage.jpeg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customShape: {
    width: 200,
    height: 200,
    borderRadius: 100, 
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default CustomShapeImage;
