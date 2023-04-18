import { StyleSheet, View, Alert } from "react-native";
import React, { useState, useEffect, useRef } from "react";

import Colors from "../constants/colors";
import NumbersAndButtons from "../components/NumbersAndButtons";

const generateRandomBetween = (min, max, excluded) => {
  p = Math.random();
  console.log(p);
  const rndNum = Math.floor(p * (max - min)) + min;
  console.log(rndNum);
  if (rndNum === excluded) {
    return generateRandomBetween(min, max, excluded);
  } else {
    return rndNum;
  }
};

const GamePlayScreen = (props) => {
  const [round, setRound] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice || round === 10) {
      props.onGameOver(round);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "go low" && currentGuess < props.userChoice) ||
      (direction === "go high" && currentGuess > props.userChoice)
    ) {
      Alert.alert(
        "Pathetic",
        "What kind of caveman tries to cheat a computer?",
        [{ text: "Sorry", style: "cancel" }]
      );
      return;
    }
    if (direction === "go low") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    setCurrentGuess(
      generateRandomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
      )
    );
    setRound((currentRound) => currentRound + 1);
  };

  return (
    <View style={styles.container}>
      <NumbersAndButtons
        title="COMPUTER'S GUESS"
        number={currentGuess}
        buttonNoTitle="go low"
        buttonYesTitle="go high"
        onChange={nextGuessHandler.bind(this, "go low")}
        onConfirm={nextGuessHandler.bind(this, "go high")}
      />
    </View>
  );
};

export default GamePlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: Colors.screen,
  },
});
