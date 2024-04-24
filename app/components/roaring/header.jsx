import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
const Header = () => {
  const [loaded] = useFonts({
    BubblegumSans: require("../../../assets/fonts/BubblegumSans-Regular.ttf"),
  });
  console.log("Font Loaded:", loaded);

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/roaringImages/notesemojis/WhiteWhaleWrinting.jpeg")}
        style={styles.header}
        resizeMode="cover"
      >
        <View style={styles.overlay}></View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>
            Writing can be your therapy. Roar your feelings boldly.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Link href="components/roaring/notePage">
              <Text style={styles.buttonText}>Add A Roar</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "30%",
    width: "100%",
    marginBottom: 20,
  },
  header: {
    flex: 1,
    overflow: "hidden",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    blurRadius: 20,
  },
  headerContent: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 50,
  },
  headerText: {
    color: "#1F7999",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "BubblegumSans",
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(31, 121, 153, 0.5)",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#1F7999",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
