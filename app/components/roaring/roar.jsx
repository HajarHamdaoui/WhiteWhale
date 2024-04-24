import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import NoteItem from "./noteItem";
import Header from "./header";
import { Ionicons } from "@expo/vector-icons";

export default Roaring = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = require("../../../data/diary.json");
        setNotes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <NoteItem
      title={item.title}
      reactions={item.reactions}
      date={item.date}
      onEdit={() => handleEdit(item.id)}
      onDelete={() => handleDelete(item.id)}
    />
  );

  const keyExtractor = (item, index) => {
    if (item.id) {
      return item.id.toString();
    }
    return index.toString();
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 10,
  },
  flatList: {
    paddingBottom: 20,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007AFF",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
