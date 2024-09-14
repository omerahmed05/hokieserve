import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
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

  return (
    <ParallaxScrollView
      headerImage={
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.profileButton} onPress={() => console.log('Profile pressed')}>
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity>
          <Image
            source={require('@/assets/images/hokiebird.png')}
            style={styles.hokiebirdLogo}
          />
          <View style={styles.textContainer}>
            {curvedText}
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hokiebirdLogo: {
    width: 500,
    height: 500,
    bottom: -75,
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
    top: -125,
    right: -500,
    padding: 10,
    backgroundColor: '#FF6600',
    borderRadius: 5,
  },
  profileText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});