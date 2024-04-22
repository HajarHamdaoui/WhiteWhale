import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { OPENAI_API_KEY } from '@env';
import OpenAI from "openai";
// import Constants from 'expo-constants';

// const apiKey = OPENAI_API_KEY;

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  // const [apiKey, setApiKey] = useState("");
  // useEffect(() => {
  //   setApiKey(OPENAI_API_KEY);
  // }, [])
  
// const config = {
//       headers: {
//         Authorization: `Bearer ${OPENAI_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     };
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
  
  async function generateResponse (prevMessages) {
    
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a children therapist working in the cbt model to help them with their phone addiction act funny and friendly and try to be talkative."},
          ...prevMessages],
      model: "ft:gpt-3.5-turbo-0125:personal:cbt-phone-addict:9Epx47JT",
    } );
  
    const response = completion.choices[0];
    return response;
    // console.log(completion.choices[0]);
  }

  const sendMessage = async () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { role: 'user', content: inputText }]);
      const gptResponse = await generateResponse(messages).message;
      setMessages([...messages, { role: 'user', content: inputText, gptResponse }]);
      console.log(messages);
      setInputText('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={[styles.message, item.role === 'user' ? styles.messageSent : styles.messageRecieved]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messagesContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  messageContainer: {
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  message: {
    padding: 10,
    borderRadius: 8,
    maxWidth: '70%',
  },
  messageSent: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
    color: '#FFF',
  },
  messageRecieved: {
    backgroundColor: '#EEE',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
