import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const register = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/registerBlobsWaves/header.png')} style={styles.headerImg} />
      <Image source={require('../../assets/icon.png')} style={{width: 100, height: 100}} />
      <Text>WHITE WHALE</Text>
      <Text>Sign Up</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        placeholderTextColor="#F3B6AC"
        // fontSize={30}
        autoCapitalize="none" 
      />
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        placeholderTextColor="#F3B6AC"
        // fontSize={30}
        autoCapitalize="none" 
      />
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        placeholderTextColor="#F3B6AC"
        // fontSize={30}
        autoCapitalize="none" 
      />
      <TouchableOpacity>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default register

const styles = StyleSheet.create({
  container:{
    fontFamily: 'Poppins-Regular',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  headerImg: {
    top: 0,
    left: 0,
    zIndex: -999,
    position: 'absolute'
  },
  headerImg: {
    top: 0,
    left: 0,
    zIndex: -999,
    position: 'absolute'
  },
  headerTitle:{
    fontFamily: 'BubblegumSans-Regular'
  },
  headerIndex: {

  },
  textInput:{
    backgroundColor: '#7FC7D9',
    borderColor: '#365486',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
})