import { Animated, Easing, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';

const signName = () => {

  const [loaded] = useFonts({
    BubblegumSans: require('../../assets/fonts/BubblegumSans-Regular.ttf'),
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

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
            toValue: -10,
            duration: 5000,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
          Animated.timing(animatedValue, { 
            toValue: 10,
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
        source={require('../../assets/registerBlobsWaves/green2.png')} 
        style={[{position: 'absolute', top: 200, left:25, zIndex: -1,},{ transform: [{ translateY: floatAnim2 },{ translateX: floatAnim2 },{ rotate: floatAnim2.interpolate({ 
          inputRange: [0, 360], 
          outputRange: ['0deg', '360deg'] 
        }) }] }]} />
      <Animated.Image 
      source={require('../../assets/registerBlobsWaves/red1.png')} 
      style={[{position: 'absolute', top: 530, left:145, zIndex: -1,}, { transform: [{ translateY: floatAnim1 }] }]} />
      <View>
        <Text style={styles.headerTitle}>WHITE WHALE</Text>
        <Text style={styles.headerIndex}>Sign Up</Text>
      </View>
      <Text style={styles.greeting}>YAAAY you want to be freinds then</Text>
      <Text style={styles.greeting}>what's your name?</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#0F1035"
        // fontSize={30}
        autoCapitalize="none" 
      />
      <TouchableOpacity style={styles.button}>
        <Link href="(auth)/signAge">
        <Text style={styles.buttonLabel}>Next</Text></Link>
      </TouchableOpacity>
      <Image source={require('../../assets/icon.png')} style={styles.icon} />
    </View>
  )
}

export default signName

const styles = StyleSheet.create({
  container:{
    fontFamily: 'Poppins',
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
    fontFamily: 'BubblegumSans',
    color: '#365486',
    fontSize: 40,
    // top: 100,
  },
  headerIndex: {
    alignSelf: 'center',
    color: '#365486',
    fontFamily: 'Poppins',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#7FC7D9',
    borderColor: '#365486',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '70%',
    // padding: 10,
    marginBottom: 30,
    borderWidth: 3,
    // borderRadius: 5,
    color: '#0F1035',
    fontFamily: 'Poppins',
    paddingLeft: 40,
    // paddingVertical: 20,
    elevation: 2,  
    height: 40,
  },
  label:{
    fontFamily: 'BubblegumSans',
    fontSize: 20,
    marginTop: 20
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
    fontFamily: 'Poppins',
  },
  greeting: {
    fontFamily: 'Poppins',
    margin: 5,
    fontWeight: 'bold',
  }
})