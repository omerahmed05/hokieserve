import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const text = "HokieServe";
  const angles = [-25, -20, -15, -10, 0, 5, 10, 15, 20, 25];
  const translations = [-60, -50, -40, -30, -10, 20, 30, 40, 50, 60];

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
          {/* Profile Button at the top right
          <TouchableOpacity style={styles.profileButton} onPress={() => console.log('Profile pressed')}>
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity> */}
          
          {/* Hokie Serve text */}
          <View style={styles.curvedTextContainer}>
            {curvedText}
          </View>

          {/* Request Service text and input */}
          <View style={styles.requestServiceContainer}>
            {/* <TouchableOpacity style={styles.serviceButton} onPress={() => console.log('Search button pressed')}>
            <ThemedText type="title" style={styles.requestServiceText}>Request Service</ThemedText></TouchableOpacity>
            <Text style={styles.subText}>Submit a Help Request Using the Button Above:</Text> */}
            
            {/* Container for the search bar and button */}
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchBar}
                placeholder="Search for services to offer others!"
              />
              <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Search button pressed')}>
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
            </View>
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
    justifyContent: 'flex-start',
    padding: 20,
  },
  // Hokie Serve curved text container
  curvedTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1,
    marginBottom: 30,
  },
  HokieServeTxt: {
    fontSize: 30,
    top: 10,
    fontWeight: 'bold',
    color: '#FF6600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  profileText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  // Container for the request service text and input
  requestServiceContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  requestServiceText: {
    fontSize: 24,
    marginBottom: 10,
    color: 'white',
  },
  subText: {
    marginBottom: 30,
    fontSize: 18, // Larger text size
    fontWeight: 'bold', // Make text bold
    alignItems: 'center'
  },
  // Container for the search bar and search button
  searchContainer: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
  },
  searchBar: {
    flex: 1, // Take up remaining space
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10, // Space between the search bar and the button
    width: 285,
    marginTop: 10 
  },
  searchButton: {
    backgroundColor: '#861F41',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10 
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  serviceButton: {
    backgroundColor: '#861F41',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  }
});
