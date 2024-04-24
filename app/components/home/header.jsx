import React from "react";
import { Dimensions, StatusBar, StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Header({ children }) {
  StatusBar.setHidden(true);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            height={200}
            width={Dimensions.get("screen").width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}
          >
            <Path
              fill="#2471A3"
              d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </Svg>
          <Text style={styles.headerText}>{children}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
  },
  top: {},
  box: {
    backgroundColor: "#2471A3",
    height: 80,
    position: "relative",
  },
  headerText: {
    position: "absolute",
    top: 40,
    left: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
