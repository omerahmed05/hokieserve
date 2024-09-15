import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AfterLoginScreen from './AfterLoginScreen'; // Adjust the path as needed

WebBrowser.maybeCompleteAuthSession();

type LoginScreenProps = {
  onBack: () => void;
};

export default function LoginScreen({ onBack }: LoginScreenProps) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '175887208515-vu29itelfb5dnr799v9t2c21eg92kjrv.apps.googleusercontent.com',
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Authenticated:', authentication);
      setIsLoggedIn(true); // Set login state to true
    }
  }, [response]);

  if (isLoggedIn) {
    return <AfterLoginScreen onBack={() => setIsLoggedIn(false)} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login here</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      </View>
      <View style={styles.buttonContainer1}>
        <Button title="Back to Home" onPress={onBack} />
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
  buttonContainer: {
    marginVertical: 10,
  },
  buttonContainer1: {
    right: 705,
    bottom: -315,
  },
});