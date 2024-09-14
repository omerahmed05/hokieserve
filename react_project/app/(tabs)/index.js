import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import LoginScreen from '../LoginScreen/LoginScreen'; // Adjust the path as needed

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  const text = "HokieServe";
  const angles = [-25, -20, -25, -1, 0, 5, 10, 15, 20, 25];
  const translations = [-60, -50, -40, -30, 0, 20, 30, 40, 50, 60];

  const curvedText = text.split('').map((char, index) => (
    <Text
      key={index}
      style={[
        styles.HokieServeTxt,
        {
          transform: [
            { rotate: `${angles[index]}deg` },
            { translateX: translations[index] },
          ]
        }
      ]}
    >
      {char}
    </Text>
  ));

  if (showLogin) {
    return <LoginScreen onBack={() => setShowLogin(false)} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.profileButton} onPress={() => console.log('Profile pressed')}>
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowLogin(true)}>
            <Image
              source={require('@/assets/images/hokiebird.png')}
              style={styles.hokiebirdLogo}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            {curvedText}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1000, // Example height
  },
  hokiebirdLogo: {
    width: 500,
    height: 500,
    bottom: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    top: -15,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  HokieServeTxt: {
    fontSize: 40,
    bottom: -50,
    fontWeight: 'bold',
    color: '#FF6600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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
});