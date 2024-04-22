import { Animated, Easing, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router'

const register = () => {
  
  const floatAnim1 = new Animated.Value(0);
  const floatAnim2 = new Animated.Value(0);

  const floatingAnimation = (animatedValue) => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 10,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, { 
          toValue: -10,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    );
  };

  const rotationgAnimation = (animatedValue) => {
    return Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 10,
            duration: 5000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(animatedValue, { 
            toValue: -10,
            duration: 5000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
        ]),
        Animated.timing(animatedValue, {
          toValue: 360,
          duration: 10000, // Adjust duration as needed
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ])
    );
  };

  useEffect(() => {
    floatingAnimation(floatAnim1).start();
    rotationgAnimation(floatAnim2).start();
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/registerBlobsWaves/header.png')} style={styles.headerImg} />
      <Animated.Image 
        source={require('../../assets/registerBlobsWaves/yello1.png')} 
        style={{ transform: [{ translateY: floatAnim2 },{ translateX: floatAnim2 },{ rotate: floatAnim2.interpolate({ 
          inputRange: [0, 360], 
          outputRange: ['0deg', '360deg'] 
        }) }] }} />
      <Animated.Image source={require('../../assets/registerBlobsWaves/green1.png')} style={[{position: 'absolute', top: 450, left:0, zIndex: -1,}, { transform: [{ translateY: floatAnim1 }] }]} />
      <Text style={styles.headerTitle}>WHITE WHALE</Text>
      <Text style={styles.headerIndex}>Sign Up</Text>
      <Image source={require('../../assets/icon.png')} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#0F1035"
        // fontSize={30}
        autoCapitalize="none" 
      />
      {/* <TextInput style={styles.input}><Image style={styles.inputIcon} source={require('../../assets/icons/eye.png')} /></TextInput> */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#0F1035"
        // fontSize={30}
        autoCapitalize="none" 
        // secureTextEntry={!showPassword}
        textContentType='password'
      />
      <TextInput
        style={styles.input}
        placeholder="Repeat password"
        placeholderTextColor="#0F1035"
        // fontSize={30}
        autoCapitalize="none" 
        textContentType='password'
        // secureTextEntry={showPassword}
        
      />
      <TouchableOpacity style={styles.button}>
        <Link href="(auth)/signName">
        <Text style={styles.buttonLabel}>Next</Text></Link>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.loginLink}>Already a friend? Login here</Text>
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
    position: 'absolute',
  },
  icon: {
    width: 100, 
    height: 100,
    marginBottom: 25,
  },
  headerTitle:{
    fontFamily: 'BubblegumSans-Regular',
    color: '#365486',
    fontSize: 40,
  },
  headerIndex: {
    color: '#365486',
    fontFamily: 'Poppins-Regular',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#7FC7D9',
    borderColor: '#365486',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: '80%',
    // padding: 10,
    marginBottom: 25,
    borderWidth: 3,
    // borderRadius: 5,
    color: '#0F1035',
    fontFamily: 'Poppins-Regular',
    paddingLeft: 40,
    // paddingVertical: 20,
    elevation: 2,  
    height: 35,
  },
  label:{},
  loginLink: {
    marginTop: 20,
    color: '#365486',
  },
  button: {
    backgroundColor: '#365486',
    borderWidth: 3,
    borderColor: '#7FC7D9',
    // color: '#DCF2F1',
    elevation: 2,
    width: 110,
    borderRadius: 30,
    alignItems: 'center',
    // height: 35,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonLabel: {
    color: '#DCF2F1',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  inputIcon:{
    // right: 10,
    flex: 1,
    alignSelf: 'flex-end',
  },
})