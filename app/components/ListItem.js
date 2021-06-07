import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
function ListItem({
  title,
  subtitle,
  image,
  iconcomponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={"#f8f4f4"} onPress={onPress}>
        <View style={styles.container}>
          {iconcomponent}
          {image && <Image style={styles.img} source={image} />}

          <View styles={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
  },
  detailsContainer: {
    marginLeft: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  subtitle: {
    marginHorizontal: 10,
    color: colors.medium,
  },
});

export default ListItem;
