import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
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
          {/* Profile Button at the top right */}
          {/* <TouchableOpacity style={styles.profileButton} onPress={() => console.log('Profile pressed')}>
            <Text style={styles.profileText}>Profile</Text>
          </TouchableOpacity> */}

          {/* HokieServe Text */}
          <View style={styles.textContainer}>
            {curvedText}
          </View>

          {/* Help Section */}
          <ThemedView style={styles.helpContainer}>
            <ThemedText type="title" style={styles.helpTitle}>What is HokieServe?</ThemedText>
            <ThemedText style={styles.helpText}>
              Here at Virginia Tech, we live by our motto, Ut. Prosim, which means "That We May Serve". Earn points by helping out with requests made by others to win points. With enough points, you can earn redeemable prizes such as a free Chicken Sandwich at Chick-Fil-A, free VT merch and much more, so lets live by our school motto and start/continue serving our community! In the input box below, you can request whatever you may require assistance with.
            </ThemedText>
            <View style={styles.helpInputContainer}>
            <TextInput
                style={styles.helpBar}
                placeholder="Briefly enter your service request"
              />
              <TouchableOpacity style={styles.helpButton} onPress={() => console.log('Search button pressed')}>
                <Text style={styles.helpButtonText}>Enter Request</Text>
              </TouchableOpacity>
              </View>
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
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
 
  hokiebirdLogo: {
    width: 70,
    height: 70,
    marginVertical: 20,
    marginBottom: 1,
    marginTop: 1,
    resizeMode: 'contain',
  },
  textContainer: {
    //marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 50,
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
    padding: 5,
    borderWidth: 2, // Adding border width
    //borderColor: 'maroon', // Setting the border color to maroon
    borderRadius: 10, // Optional: Rounded corners for the box
    backgroundColor: '#FF6600',
    marginVertical: 20,
    width: '100%',
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
  helpBar: {
    //flex: 1, // Take up remaining space
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10, // Space between the search bar and the button
    width: '90%',
    //marginTop: 70,
    marginBottom: 10,
    borderBlockColor: 'black',
    borderLeftColor: 'black', 
    borderRightColor: 'black'
  },
  helpButton: {
    backgroundColor: '#861F41',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10, 
    width: '90%',
    alignItems: 'center'
  },
  helpButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14
  }, 
  helpInputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  }
});