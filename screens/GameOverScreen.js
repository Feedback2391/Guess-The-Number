import { StyleSheet, Text, View, Button,  } from "react-native";
import React from "react";

import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  const { rounds, userNumber } = props;

  const newGameHandler = () => {
    props.onNewGame();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.content1}>GAME OVER</Text>
      {rounds >= 10 && (
        <Text style={styles.winContent2}>
          You won, exceeding {rounds} round(s)!!
        </Text>
      )}
      {rounds < 10 && (
        <Text style={styles.loseContent2}>
          You lost to the computer in {rounds} rounds(s)!!
        </Text>
      )}
      <Text style={styles.content2}>
        The number you entered was {userNumber}
      </Text>
      <Text style={styles.content3}>
        Do you want to start a new game?
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="new game" onPress={newGameHandler} color="#CBE4DE" />
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen,
    alignItems: "center",
    paddingTop: "20%",
  },
  content1: {
    paddingBottom: "20%",
    fontWeight: "bold",
    fontSize: 30,
    color: "#B2A4FF",
  },
  winContent2: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.affirmative,
  },
  loseContent2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.negative,
    flexWrap: "wrap",
  },
  content2: {
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#B2A4FF",
  },
  content3: {
    paddingTop: 50,
    fontWeight: "bold",
    fontSize: 20,
    color: "#B2A4FF",
  },
  buttonContainer: {
    width: "60%",
    margin: 25,
  },
});
