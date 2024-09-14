import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  const text = "HokieServe";

  const curvedText = text.split('').map((char, index) => (
    <Text
      key={index}
      style={[
        styles.HokieServeTxt,
        
      ]}
    >
      {char}
    </Text>
  ));

  return (
    <ParallaxScrollView
      headerImage={
        <View style={styles.imageContainer}>
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
    fontWeight: 'bold',
    color: '#FF6600', // Virginia Tech orange
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});