import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GamePlayScreen from "./screens/GamePlayScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [round, setRound] = useState(0);

  const renderStartGameScreen = () => {
    setRound(0);
    setUserNumber(null);
  };

  const renderGamePlayScreen = (selectedUserNumber) => {
    setUserNumber(selectedUserNumber);
  };

  const renderGameOverScreen = (currentRound) => {
    setRound(currentRound);
  };

  let content = <StartGameScreen onStartGame={renderGamePlayScreen} />;

  if (userNumber && round <= 0) {
    content = (
      <GamePlayScreen
        userChoice={userNumber}
        onGameOver={renderGameOverScreen}
      />
    );
  } else if (round > 0) {
    content = (
      <GameOverScreen rounds={round} userNumber={userNumber} onNewGame={renderStartGameScreen} />
    );
  } else if (!round) {
    content = <StartGameScreen onStartGame={renderGamePlayScreen} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="GUESS A NUMBER" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
