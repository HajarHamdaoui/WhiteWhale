import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import diaryData from "../../../data/diary.json";

const NotePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const backgroundInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#B3E5FC", "#E1F5FE"],
  });

  const animatedStyle = {
    backgroundColor: backgroundInterpolate,
  };

  const chooseEmoji = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const saveNote = () => {
    const newNote = {
      title: title,
      content: content,
      date: new Date().toISOString().split("T")[0],
      reactions: {
        happy: selectedEmoji === "happy" ? 1 : 0,
        sad: selectedEmoji === "sad" ? 1 : 0,
        angry: selectedEmoji === "angry" ? 1 : 0,
      },
    };

    diaryData.push(newNote);

    setTitle("");
    setContent("");
    setSelectedEmoji("");
  };

  const deleteNote = () => {
    diaryData.pop();

    setTitle("");
    setContent("");
    setSelectedEmoji("");
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.noteContainer}>
            <View style={styles.noteHeader}>
              <Text style={styles.noteTitle}>Note</Text>
              <TouchableOpacity onPress={saveNote}>
                <View style={styles.noteSaveButton}>
                  <Text style={styles.noteSaveButtonText}>Save</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.noteTitleInput}
              placeholder="Title"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
            <TextInput
              style={styles.noteContentInput}
              placeholder="Write your note here..."
              multiline
              value={content}
              onChangeText={(text) => setContent(text)}
            />
            <View style={styles.noteActions}>
              <TouchableOpacity
                onPress={() => chooseEmoji("happy")}
                style={styles.noteEmojiButton}
              >
                <MaterialIcons
                  name="mood"
                  size={24}
                  color={selectedEmoji === "happy" ? "#FFEB3B" : "#3F51B5"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => chooseEmoji("sad")}
                style={styles.noteEmojiButton}
              >
                <MaterialIcons
                  name="mood-bad"
                  size={24}
                  color={selectedEmoji === "sad" ? "#FF4081" : "#3F51B5"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => chooseEmoji("angry")}
                style={styles.noteEmojiButton}
              >
                <MaterialIcons
                  name="mood-bad"
                  size={24}
                  color={selectedEmoji === "angry" ? "#F44336" : "#3F51B5"}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={deleteNote}
              style={styles.noteDeleteButton}
            >
              <Text style={styles.noteDeleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80vw",
  },
  content: {
    padding: 20,
  },
  noteContainer: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3F51B5",
  },
  noteTitleInput: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3F51B5",
    borderBottomColor: "#3F51B5",
    borderBottomWidth: 1,
    height: 40,
    textAlignVertical: "top",
  },
  noteContentInput: {
    fontSize: 16,
    marginBottom: 10,
    color: "#3F51B5",
    borderColor: "#3F51B5",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    height: 150,
    textAlignVertical: "top",
  },
  noteActions: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  noteEmojiButton: {
    backgroundColor: "#FFFDE7",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  noteSaveButton: {
    backgroundColor: "#81D4FA",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  noteSaveButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  noteDeleteButton: {
    backgroundColor: "#FFC107",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  noteDeleteButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NotePage;
