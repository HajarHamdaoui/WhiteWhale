import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useFonts } from "expo-font";
import OptionCard from "./optionCard";
import {
  roaring,
  challenging,
  chatting,
  training,
  ArrowWhale,
} from "../../../Constants/photos";

const CardWrapper = () => {
  const [loaded] = useFonts({
    BubblegumSans: require("../../../assets/fonts/BubblegumSans-Regular.ttf"),
    Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const initialAngle = 0;

  const [angle, setAngle] = useState(initialAngle);

  const calculateRotation = (cardAngle) => {
    let diff = cardAngle - initialAngle;
    diff = ((diff % 360) + 360) % 360;
    setAngle(diff);
  };
  const getTextFromAngle = (angle) => {
    if (angle >= 315 || angle < 45) {
      return "Roar your words boldly.";
    } else if (angle >= 45 && angle < 135) {
      return "Best White Whale Challenges";
    } else if (angle >= 135 && angle < 225) {
      return "How is it going?";
    } else {
      return "Train like a hero. ";
    }
  };
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          styles.centerCircle,
          {
            transform: [{ rotate: `${angle}deg` }],
          },
        ]}
      >
        <Image source={ArrowWhale} style={styles.arrow} />
        <TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                position: "absolute",
                transform: [
                  { translateX: -70 },
                  { translateY: -20 },
                  { rotate: `-${angle}deg` },
                ],
              },
            ]}
          >
            {getTextFromAngle(angle)}
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <View style={styles.row}>
        <OptionCard
          onPress={() => calculateRotation(315)}
          textAbovePhoto="Roaring"
          photoSource={roaring}
        />
        <OptionCard
          onPress={() => calculateRotation(45)}
          textAbovePhoto="Challenging"
          photoSource={challenging}
        />
      </View>
      <View style={styles.row}>
        <OptionCard
          onPress={() => calculateRotation(225)}
          textAbovePhoto="Training"
          photoSource={training}
        />
        <OptionCard
          onPress={() => calculateRotation(135)}
          textAbovePhoto="Chatting"
          photoSource={chatting}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "95vw",
    aspectRatio: 1,

    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    gap: 20,
  },
  row: {
    flexDirection: "row",
    gap: 20,
  },
  arrow: { width: 50, height: 50, top: -20 },
  centerCircle: {
    width: "30%",
    height: "30%",
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
    zIndex: 10,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "BubblegumSans",
    color: "#1F7999",
    fontSize: 13,
    width: 100,
    padding: 16,
  },
});

export default CardWrapper;
