import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

type AfterLoginScreenProps = {
  onBack: () => void;
};

export default function AfterLoginScreen({ onBack }: AfterLoginScreenProps) {
  const progressValue = 0.5; // Example progress value

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
      <TouchableOpacity style={styles.profileButton} onPress={() => console.log('Profile pressed')}>
        <Text style={styles.profileText}>Profile</Text>
      </TouchableOpacity>
      <View style={styles.backButtonContainer}>
        <Button title="Back to Login" onPress={onBack} />
      </View>
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
  profileButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 15,
    backgroundColor: '#FF6600',
    borderRadius: 5,
  },
  profileText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  backButtonContainer: {
    left: -705,
    bottom: -310,
  },
});