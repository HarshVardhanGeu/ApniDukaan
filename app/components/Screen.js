import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import constant from "expo-constants";
function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: constant.statusBarHeight,
  },
});

export default Screen;
