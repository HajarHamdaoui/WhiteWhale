import React from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const MyScreen = () => {
  // Animated values for floating animation
  const floatAnim1 = new Animated.Value(0);
  const floatAnim2 = new Animated.Value(0);

  // Floating animation configuration
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

  // Start floating animations
  React.useEffect(() => {
    floatingAnimation(floatAnim1).start();
    floatingAnimation(floatAnim2).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Floating Illustrations */}
      <Animated.Image
        source={require('../assets/login particles/heart.png')}
        style={[styles.illustration, { transform: [{ translateY: floatAnim1 }] }]}
      />
      <Animated.Image
        source={require('../assets/login particles/heart gren.png')}
        style={[styles.illustration, { transform: [{ translateY: floatAnim2 }] }]}
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>My Screen</Text>
        {/* Add your other content here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your background color
    position: 'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  illustration: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: -1,
  },
});

export default MyScreen;
