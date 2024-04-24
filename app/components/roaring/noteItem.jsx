import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NoteItem = ({ title, reactions, date, onEdit, onDelete }) => {
  const happyReaction = reactions.happy > 0 ? "😊" : "";
  const sadReaction = reactions.sad > 0 ? "😢" : "";
  const angryReaction = reactions.angry > 0 ? "😡" : "";

  return (
    <View style={styles.noteItemContainer}>
      <View style={styles.dateAndEmojiContainer}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.reactionsContainer}>
          <AntDesign name="like1" size={24} color="#3498db" />
          <AntDesign name="dislike2" size={24} color="#3698db" />
          <AntDesign name="meh" size={24} color="#3498db" />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonEdit]}
          onPress={onEdit}
        >
          <AntDesign name="edit" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonDelete]}
          onPress={onDelete}
        >
          <AntDesign name="delete" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItemContainer: {
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#3498db",
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  dateAndEmojiContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  title: {
    flex: 1,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
  },
  buttonEdit: {
    backgroundColor: "#3498db",
  },
  buttonDelete: {
    backgroundColor: "#e74c3c",
  },
  reactionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  date: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default NoteItem;
