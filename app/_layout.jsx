import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)/sign-in" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)/sign-up" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)/signAge" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)/signName" options={{ headerShown: true }} />
      <Stack.Screen name="testParticles" options={{ headerShown: true }} />
      <Stack.Screen name="testPushNotif" options={{ headerShown: true }} />
      <Stack.Screen name="chat" options={{ headerShown: true }} />
      <Stack.Screen
        name="components/roaring/roar"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="components/roaring/notePage"
        options={{ headerShown: true }}
      />
    </Stack>
  );
};

export default RootLayout;
