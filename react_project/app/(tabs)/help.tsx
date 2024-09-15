import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

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
          {/* Profile Button at the top right */}
          <TouchableOpacity style={styles.profileButton} onPress={() => console.log('Profile pressed')}>
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity>

          {/* HokieServe Text */}
          <View style={styles.textContainer}>
            {curvedText}
          </View>

          {/* Help Section */}
          <ThemedView style={styles.helpContainer}>
            <ThemedText type="title" style={styles.helpTitle}>Help</ThemedText>
            <ThemedText style={styles.helpText}>
              Here at Virginia Tech, we live by our motto, Ut. Prosim, which means "That We May Serve".
            </ThemedText>
          </ThemedView>

          {/* Hokiebird Image */}
          <Image
            source={require('@/assets/images/hokiebird.png')}
            style={styles.hokiebirdLogo}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  hokiebirdLogo: {
    width: 300,
    height: 300,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  HokieServeTxt: {
    fontSize: 40,
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
    padding: 10,
    backgroundColor: '#FF6600',
    borderRadius: 5,
  },
  profileText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  helpContainer: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 2, // Adding border width
    //borderColor: 'maroon', // Setting the border color to maroon
    borderRadius: 10, // Optional: Rounded corners for the box
    backgroundColor: '#FF6600',
    marginVertical: 20,
  },
  helpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  helpText: {
    fontSize: 18, // Larger text size
    fontWeight: 'bold', // Make text bold
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#861F41', 
  },
});