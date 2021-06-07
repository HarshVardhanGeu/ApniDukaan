import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closebuttons}>
        <MaterialCommunityIcons name="close" color="white" size="35" />
      </View>
      <View style={styles.deletebuttons}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size="35"
        />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  closebuttons: {
    position: "absolute",
    top: 70,
    left: 20,
  },
  deletebuttons: {
    position: "absolute",
    top: 70,
    right: 20,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
