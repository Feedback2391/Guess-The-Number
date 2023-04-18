import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React from "react";

import Card from "./Card";
import Colors from "../constants/colors";
import NumbersAndButtons from "./NumbersAndButtons";

const ConfirmModalScreen = (props) => {
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.modalContainer}>
        <Card style={styles.cardContainer}>
          <NumbersAndButtons
            title="YOU HAVE ENTERED"
            number={props.selectedNumber}
            buttonNoTitle="change number"
            buttonYesTitle="start game"
            onChange={props.onChange}
            onConfirm={props.onConfirm}
          />
        </Card>
      </View>
    </Modal>
  );
};

export default ConfirmModalScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "40%",
    backgroundColor: Colors.screen,
  },
  cardContainer: {
    width: 300,
    maxWidth: "80%",
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
