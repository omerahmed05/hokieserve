import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

type AfterLoginScreenProps = {
  onBack: () => void;
};

export default function AfterLoginScreen({ onBack }: AfterLoginScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Dashboard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});