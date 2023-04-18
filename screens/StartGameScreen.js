import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";

import Card from "../components/Card";
import Colors from "../constants/colors";
import ConfirmModalScreen from "../components/ConfirmModalScreen";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetButtonHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmButtonHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "INVALID NUMBER!!",
        "Please enter an integer between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetButtonHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
    setModalVisible(true);
  };

  const modalChangeButtonHandler = () => {
    setModalVisible(false);
  };

  const modalConfirmButtonHandler = () => {
    props.onStartGame(selectedNumber);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <>
        <View style={styles.screen}>
          <Text style={styles.title}>START A NEW GAME</Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>ENTER A NUMBER</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="number-pad"
              keyboardAppearance="dark"
              maxLength={2}
              blurOnSubmit
              onChangeText={numberInputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="reset"
                  color={Colors.negative}
                  onPress={resetButtonHandler}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="confirm"
                  color={Colors.affirmative}
                  onPress={confirmButtonHandler}
                />
              </View>
            </View>
          </Card>
        </View>
        {modalVisible && (
          <ConfirmModalScreen
            visible={modalVisible}
            selectedNumber={selectedNumber}
            onChange={modalChangeButtonHandler}
            onConfirm={modalConfirmButtonHandler}
          />
        )}
      </>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: Colors.screen,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    marginTop: 50,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 100,
    height: 50,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: Colors.textbox,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
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
});
