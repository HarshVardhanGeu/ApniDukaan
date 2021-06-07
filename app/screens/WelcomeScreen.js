import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View style={styles.text}>
        <AppText>Sell and buy at will</AppText>
      </View>

      <AppButton title="login" color="primary"></AppButton>
      <AppButton title="Register" color="secondary"></AppButton>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
    position: "absolute",
    top: 90,
  },
  text: {
    color: colors.black,
    flex: 1,
    justifyContent: "center",
  },
});
export default WelcomeScreen;
