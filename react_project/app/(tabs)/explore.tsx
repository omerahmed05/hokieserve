import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
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
          
          {/* Hokie Serve text */}
          <View style={styles.curvedTextContainer}>
            {curvedText}
          </View>

          {/* Request Service text and input */}
          <View style={styles.requestServiceContainer}>
            <ThemedText type="title" style={styles.requestServiceText}>Request Service</ThemedText>
            <Text style={styles.subText}>Submit a Help Request Below:</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Search for services you would like to offer!"
            />
          </View>
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
    padding: 20,
  },
  // Hokie Serve curved text container
  curvedTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  HokieServeTxt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF6600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  // Profile button styling
  profileButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#FF6600',
    borderRadius: 5,
    zIndex: 1,
  },
  profileText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  // Container for the request service text and input
  requestServiceContainer: {
    alignItems: 'center',
    width: '100%',
  },
  requestServiceText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#861F41'
  },
  subText: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputBox: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});