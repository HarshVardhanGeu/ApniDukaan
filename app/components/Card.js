import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={image} />
      <View style={styles.text}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 15,
  },
  img: {
    width: "100%",
    height: 200,
  },
  text: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: colors.secondary,
  },
});
export default Card;
