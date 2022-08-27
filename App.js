import { StyleSheet, Text, View } from "react-native";

import MainNavigator from "./navigators/main-navigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <MainNavigator />
    </>
  );
}

const styles = StyleSheet.create({});
