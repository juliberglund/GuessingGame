import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // 1 till 100
  }

  const handleGuess = () => {
    const numericGuess = parseInt(guess);

    if (isNaN(numericGuess)) {
      Alert.alert("Felaktig inmatning", "Ange ett giltigt tal.");
      return;
    }

    if (numericGuess < numberToGuess) {
      setMessage("För lågt! Försök igen.");
    } else if (numericGuess > numberToGuess) {
      setMessage("För högt! Försök igen.");
    } else {
      setMessage("Rätt gissat! 🎉");
    }
  };

  const resetGame = () => {
    setNumberToGuess(generateRandomNumber());
    setGuess("");
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gissa numret (1–100)</Text>

      <TextInput
        style={styles.input}
        placeholder="Skriv din gissning"
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
      />

      <Button title="Gissa" onPress={handleGuess} />

      <Text style={styles.message}>{message}</Text>

      {message === "Rätt gissat! 🎉" && (
        <Button title="Spela igen" onPress={resetGame} color="green" />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
  },
});
