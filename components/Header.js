import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    paddingVertical: 50,
    backgroundColor: "#DBE4C6",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
