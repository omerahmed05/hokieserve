import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

type LoginScreenProps = {
  onBack: () => void;
};

export default function LoginScreen({ onBack }: LoginScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
      <Button title="Back to Home" onPress={onBack} />
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