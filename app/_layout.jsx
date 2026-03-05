import React from "react";
import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css";
import AuthProvider from "../Context/AuthProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      ></Stack>
    </AuthProvider>
  );
}
