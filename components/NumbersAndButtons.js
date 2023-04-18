import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import Colors from "../constants/colors";

const NumbersAndButtons = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{props.number}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title={props.buttonNoTitle}
            color={Colors.negative}
            onPress={props.onChange}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={props.buttonYesTitle}
            color={Colors.affirmative}
            onPress={props.onConfirm}
          />
        </View>
      </View>
    </View>
  );
};

export default NumbersAndButtons;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 10,
  },
  button: {
    width: "30%",
  },
  numberContainer: {
    margin: 25,
    padding: 25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.textbox,
  },
  number: {
    fontWeight: "bold",
    fontSize: 35,
  },
});
