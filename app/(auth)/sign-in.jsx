import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font';


const Login = () => {
  const [fontsLoaded, fontError] = useFonts({
    'BubblegumSans-Regular': require('../../assets/fonts/BubblegumSans-Regular.ttf'),
  });
  

  const floatAnim1 = new Animated.Value(30);
  const floatAnim2 = new Animated.Value(0);
  const floatAnim3 = new Animated.Value(0);
  const floatAnim4 = new Animated.Value(0);
  
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
        Animated.timing(animatedValue, {
          toValue: 10,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    );
  };
  
  useEffect(() => {
    floatingAnimation(floatAnim1).start();
    floatingAnimation(floatAnim2).start();
    floatingAnimation(floatAnim3).start();
    floatingAnimation(floatAnim4).start();
  }, [])
  
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1B728D', '#2EC4F3']}
        style={styles.gradient}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Animated.Image
          source={require('../../assets/login particles/ghima.png')}
          style={[styles.illustration, styles.ghima, { transform: [{ translateY: floatAnim1 }] }]}
        />
        <Animated.Image
          source={require('../../assets/login particles/ghimaokhra.png')}
          style={[styles.illustration, styles.ghimaokhra, { transform: [{ translateY: floatAnim2 }] }]}
        />
        <Image 
          source={require('../../assets/Frame 15.png')}
          // style={{width: 200, height: 200}}
        />
        <Animated.Image
          source={require('../../assets/login particles/heart.png')}
          style={[styles.illustration, styles.heart, { transform: [{ translateY: floatAnim3 }] }]}
        />
        <Animated.Image
          source={require('../../assets/login particles/heart gren.png')}
          style={[styles.illustration, styles.heartgren, { transform: [{ translateY: floatAnim4 }] }]}
        />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#F3B6AC"
          fontSize={30}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#F3B6AC"
          fontSize={30}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Get Freedom</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.registerLink}>Don't have an account? Register here</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 64,
    marginVertical: 20,
    fontFamily: 'BubblegumSans-Regular',
    color: '#fff'
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#F3B6AC',
    borderRadius: 50,
    fontFamily: 'BubblegumSans-Regular',
    paddingLeft: 40,
    paddingVertical: 20,
    elevation: 5,  
  },
  button: {
    backgroundColor: '#71E6D3',
    width: '80%',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 20,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 1,
    elevation: 5,  
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'BubblegumSans-Regular',
  },
  registerLink: {
    marginTop: 20,
    color: '#efefef',
  },
  illustration: {
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: 1,
  },
  ghima:{top: 90, left: 3,},
  ghimaokhra:{top: 145, left: 290,},
  heart:{top: 345, left: 276,},
  heartgren:{top: 377, left: 0, zIndex: 6,},
})