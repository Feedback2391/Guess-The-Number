import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = (props) => {
  return (
    <View {...props} style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#ABC4AA",
    shadowColor: "#dddddd",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowBlur: 0.2,
    elevation: 10,
  },
});
