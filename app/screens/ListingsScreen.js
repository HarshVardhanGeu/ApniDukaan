import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "red jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch",
    price: 200,
    image: require("../assets/couch.jpg"),
  },
];
function ListingsScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.cards}>
        <FlatList
          data={listings}
          keyExtractor={(listingsItem) => listingsItem.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              image={item.image}
            />
          )}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  cards: {
    padding: 20,
  },
  container: {
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
