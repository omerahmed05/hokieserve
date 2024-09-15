import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

type AfterLoginScreenProps = {
  onBack: () => void;
};

export default function AfterLoginScreen({ onBack }: AfterLoginScreenProps) {
  const progressValue = 0.5; // Example progress value, yall cant add the real data here

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Dashboard!</Text>
      <Progress.Bar 
        progress={progressValue}
        width={200}
        color="#FF6600"
        style={styles.progressBar}
      />
      <Text style={styles.percentageText}>{`${(progressValue * 100).toFixed(0)}%`}</Text>
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
  progressBar: {
    marginTop: 20,
  },
  percentageText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});